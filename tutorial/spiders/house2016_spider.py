import scrapy, json, os, re
from collections import OrderedDict
from contextlib import suppress
from operator import itemgetter

class HouseSpider2016(scrapy.Spider):
    year       = '2016'
    name       = 'house2016'

    def start_requests(self):
        self.__clearPickledFile()
        for url in self.__urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        data               = OrderedDict()
        handle             = self.__handler()
        data['state_name'] = handle(lambda: response.url.rstrip('/').split('/')[-1])
        data['districts']  = handle(self.__parseDistricts, response)

        self.__appendPickledFile(data)

    ################################################
    #              PRIVATE CONSTANTS               #
    ################################################

    __states = ('alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
                'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa',
                'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',
                'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire',
                'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio',
                'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
                'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia',
                'wisconsin', 'wyoming')

    @property
    def __outputPath(self):
        return '%s_house_results.json' % (self.year,)

    @property
    def __baseUrl(self):
        return 'http://www.politico.com/%s-election/results/map/house' % (self.year,)

    @property
    def __urls(self):
        for s in self.__states:
            yield '%s/%s/' % (self.__baseUrl, s)

    ################################################
    #                   HELPERS                    #
    ################################################

    @staticmethod
    def __humanize(state_name):
        words       = state_name.split('-')
        capitalized = ['%s%s' % (w[0].upper(), w[1:].lower()) for w in words]
        return ' '.join(capitalized)

    def __handler(self):
        errorOccurred = False
        def handle(*varargs, **kw):
            callback, *args = varargs
            try:
                data = callback(*args, **kw)
            except Exception as e:
                data = {'error': '%s: %s' % (type(e).__name__, str(e))}
                errorOccurred = True
            return data

        def error_raised():
            return errorOccurred

        handle.error_raised = error_raised
        return handle

    ################################################
    #           FILE InOut INTERFACE               #
    ################################################

    def __readPickledFile(self):
        with open(self.__outputPath, 'r') as f:
            return json.loads(f.read(), object_pairs_hook=OrderedDict)

    def __overwritePickledFile(self, data):
        with open(self.__outputPath, 'w') as f:
            f.write(json.dumps(data, indent=2))

    def __clearPickledFile(self):
        empty_array = {'states': []}
        self.__overwritePickledFile(empty_array)

    def __appendPickledFile(self, single_state_results):
        old_results    = self.__readPickledFile()
        new_results    = old_results + [single_state_results]
        sorted_results = sorted(new_results, key=itemgetter('state_name'))

        self.__overwritePickledFile(sorted_results)

    def __finalizePickledFile(self):
        unwrapped_data = self.__readPickledFile()
        data = {'states': unwrapped_data}
        self.__overwritePickledFile(data)

    ################################################
    #              PRIVATE PARSERS                 #
    ################################################

    def __parseDistricts(self, response):
        election_results  = response.css('section.content-group.election-results')
        districts         = election_results.css('div.results-dataset')
        unordered_data    = [self.__parseDistrict(d) for d in districts]
        data              = sorted(unordered_data, key=itemgetter('district_id'))

        return data

    def __parseDistrict(self, district):
        data   = OrderedDict()
        handle = self.__handler()

        data['district_id'] = handle(self.__extractDistrictID, district)
        data['candidates']  = handle(self.__extractCandidates, district)

        return data

    def __extractDistrictID(self, district):
        as_text = district.xpath('@id').extract_first()
        as_num  = int(as_text.split('district')[-1])
        return as_num

    def __extractCandidates(self, district):
        candidates = district.css('table.results-table > tbody > tr')
        return [self.__extractCandidate(c) for c in candidates]

    def __extractCandidate(self, candidate):
        data   = OrderedDict()
        handle = self.__handler()

        data['party']   = handle(self.__extractParty,   candidate)
        data['name']    = handle(self.__extractName,    candidate)
        data['votes']   = handle(self.__extractVotes,   candidate)
        data['percent'] = handle(self.__extractPercent, candidate)
        data['winner']  = handle(self.__extractWinner,  candidate)

        return data

    def __extractParty(self, candidate):
        return candidate.css('span.token.token-party > abbr').xpath('@title').extract_first()

    def __extractName(self, party):
        matches = party.css('th.results-name > span.name-combo::text')
        return matches.extract()[-1].strip()

    def __extractVotes(self, party):
        as_text = party.css('td.results-popular::text').extract_first()
        if as_text != None:
            return int(as_text.replace(',',''))

    def __extractPercent(self, party):
        as_text = party.css('td.results-percentage span.number::text').extract_first()
        if as_text != None:
            return round(float(as_text.replace('%','')) * 0.01, 3)

    def __extractWinner(self, candidate):
        return not not candidate.css('span.token.token-winner')
