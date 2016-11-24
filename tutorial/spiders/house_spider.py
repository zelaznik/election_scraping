import scrapy, json, os, re
from collections import OrderedDict
from contextlib import suppress
from operator import itemgetter
from functools import wraps, partial
from six import with_metaclass
from abc import ABCMeta, abstractproperty

def catch_errors(func):
    @wraps(func)
    def handle(*args, **kw):
        try:
            return func(*args, **kw)
        except Exception as e:
            return {'error': '%s: %s' % (type(e).__name__, e), 'function': func.__name__}

    return handle

def staticmethod_catch_errors(func):
    return staticmethod(catch_errors(func))

class HouseSpider(with_metaclass(ABCMeta)):
    name   = abstractproperty(lambda self: None)
    year   = abstractproperty(lambda self: None)
    cached = abstractproperty(lambda self: None)

    def start_requests(self):
        self._clearPickledFile()
        for state_name, url in self._statesWithUrls():
            cb = partial(self.parse, state_name)
            yield scrapy.Request(url=url, callback=cb)

    def parse(self, state_name, response):
        data               = OrderedDict()
        data['state_name'] = self._humanize(state_name)
        data['districts']  = self._parseDistricts(response)

        self._appendPickledFile(data)
        if not self.cached:
            self._saveCachedPage(state_name, response)

    ################################################
    #              PRIVATE CONSTANTS               #
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
         return 'cached_websites/house/%s' % (self.year,)

    @property
    def _outputPath(self):
        return 'output/%s_house_results.json' % (self.year,)


    @property
    def _baseUrl(self):
        if self.cached:
            return 'http://localhost:8000/cached_websites/house/%s' % (self.year,)
        else:
            return 'http://www.politico.com/%s-election/results/map/house' % (self.year,)

    def _statesWithUrls(self):
        htm = '.htm' if self.cached else ''  
        for state in self._states:
            url = '%s/%s%s' % (self._baseUrl, state, htm)
            yield (state, url)

    ################################################
    #              PRIVATE PARSERS                 #
    ################################################

    @catch_errors
    def _parseDistricts(self, response):
        districts = response.css('article.results-group')
        return [self._parseDistrict(d, i) for (i,d) in enumerate(districts)]

    @catch_errors
    def _parseDistrict(self, district, index):
        data                = OrderedDict()
        data['district_id'] = index
        data['candidates']  = self._extractCandidates(district)

        return data

    @catch_errors
    def _extractCandidates(self, district):
        candidates = district.css('table.results-table > tbody > tr')
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
    #              PRIVATE STATIC PARSERS          #
    ################################################

    @staticmethod_catch_errors
    def _humanize(state_name):
        words       = state_name.split('-')
        capitalized = [w.capitalize() for w in words]
        humanized   = ' '.join(capitalized)

        return humanized

    @staticmethod_catch_errors
    def _getStateFromUrl(url):
        return url.rstrip('/').split('/')[-1]

    @staticmethod_catch_errors
    def _extractStateID(state):
        as_text = state.xpath('@id').extract_first()
        as_num  = int(as_text.split('state')[-1])
        return as_num

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

class HouseSpider2016(HouseSpider, scrapy.Spider):
    name   = 'house2016'
    year   = '2016'
    cached = True

class HouseSpider2014(HouseSpider, scrapy.Spider):
    name   = 'house2014'
    year   = '2014'
    cached = True

class HouseSpider2012(HouseSpider, scrapy.Spider):
    name   = 'house2012'
    year   = '2012'
    cached = True