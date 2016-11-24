import scrapy, json, os, re
from collections import OrderedDict
from operator import itemgetter
from functools import partial
from abc import ABCMeta, abstractproperty, abstractmethod

from tutorial.helpers import catch_errors, staticmethod_catch_errors

class CongressSpider(scrapy.Spider):
    name   = 'congress'
    year   = abstractproperty(lambda self: None)
    cached = abstractproperty(lambda self: None)

    def start_requests(self):
        self._clearPickledFile()
        for state_name, url in self._statesWithUrls():
            cb = partial(self.__parseAndSave, state_name)
            yield scrapy.Request(url=url, callback=cb)

    def __parseAndSave(self, state_name, response):
        for data in self.parse(state_name, response):
            self._appendPickledFile(data)
            if not self.cached:
                self._saveCachedPage(state_name, response)

    @abstractmethod
    def parse(self, state_name, response):
        raise NotImplementedError

    ################################################
    #            PROTECTED CONSTANTS               #
    ################################################

    _states = ('alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
                'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa',
                'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',
                'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire',
                'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio',
                'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
                'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia',
                'wisconsin', 'wyoming')

    @property
    def _websiteCacheFolder(self):
         return 'cached_websites/%s/%s' % (self.chamber,self.year)

    @property
    def _outputPath(self):
        base_name = '%s_%s_results_politico.json' % (self.year, self.chamber)
        return 'output/%s/%s/%s' % (self.chamber, self.year, base_name)

    @property
    def _baseUrl(self):
        if self.cached:
            return 'http://localhost:8000/cached_websites/%s/%s' % (self.chamber, self.year)
        else:
            return 'http://www.politico.com/%s-election/results/map/%s' % (self.year, self.chamber)

    def _statesWithUrls(self):
        htm = '.htm' if self.cached else ''
        for state in self._states:
            url = '%s/%s%s' % (self._baseUrl, state, htm)
            yield (state, url)

    ################################################
    #              PROTECTED HELPERS               #
    ################################################

    @staticmethod_catch_errors
    def _humanize(state_name):
        words       = state_name.split('-')
        capitalized = ['%s%s' % (w[0].upper(), w[1:].lower()) for w in words]
        return ' '.join(capitalized)

    ################################################
    #              PROTECTED PARSERS               #
    ################################################

    @catch_errors
    def _extractCandidates(self, state):
        candidates = state.css('table.results-table > tbody > tr')
        return [self._extractCandidate(c) for c in candidates]

    @catch_errors
    def _extractCandidate(self, candidate):
        data            = OrderedDict()

        data['party']   = self._extractParty(candidate)
        data['name']    = self._extractName(candidate)
        data['votes']   = self._extractVotes(candidate)
        data['percent'] = self._extractPercent(candidate)
        data['winner']  = self._extractWinner(candidate)

        return data

    ################################################
    #            PROTECTED STATIC PARSERS          #
    ################################################

    @staticmethod_catch_errors
    def _extractParty(candidate):
        return candidate.css('span.token.token-party > abbr').xpath('@title').extract_first()

    @staticmethod_catch_errors
    def _extractName(party):
        matches = party.css('th.results-name > span.name-combo::text')
        return matches.extract()[-1].strip()

    @staticmethod_catch_errors
    def _extractVotes(party):
        as_text = party.css('td.results-popular::text').extract_first()
        if as_text != None:
            return int(as_text.replace(',',''))

    @staticmethod_catch_errors
    def _extractPercent(party):
        as_text = party.css('td.results-percentage span.number::text').extract_first()
        if as_text != None:
            return round(float(as_text.replace('%','')) * 0.01, 3)

    @staticmethod_catch_errors
    def _extractWinner(candidate):
        return not not candidate.css('span.token.token-winner')

    ################################################
    #           FILE InOut INTERFACE               #
    ################################################

    def _getCachePath(self, state_name):
        return '%s/%s.htm' % (self._websiteCacheFolder, state_name)

    def _saveCachedPage(self, state_name, response):
        with open(self._getCachePath(state_name), 'wb') as f:
            f.write(response.body)

    def _readPickledFile(self):
        with open(self._outputPath, 'r') as f:
            return json.loads(f.read(), object_pairs_hook=OrderedDict)

    def _overwritePickledFile(self, data):
        with open(self._outputPath, 'w') as f:
            f.write(json.dumps(data, indent=2))

    def _clearPickledFile(self):
        empty_array = []
        self._overwritePickledFile(empty_array)

    def _appendPickledFile(self, single_state_results):
        old_results    = self._readPickledFile()
        new_results    = old_results + [single_state_results]
        sorted_results = sorted(new_results, key=itemgetter('state_name'))

        self._overwritePickledFile(sorted_results)

    def _finalizePickledFile(self):
        unwrapped_data = self._readPickledFile()
        data = {'states': unwrapped_data}
        self._overwritePickledFile(data)