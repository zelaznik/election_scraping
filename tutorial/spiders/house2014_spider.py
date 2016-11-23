import scrapy, json, os, re
from collections import OrderedDict
from contextlib import suppress
from operator import itemgetter
from functools import wraps

def catch_errors(func):
    @wraps(func)
    def handle(*args, **kw):
        try:
            return func(*args, **kw)
        except Exception as e:
            return {'error': '%s: %s' % (type(e).__name__, str(e)), 'function': func.__name__}

    return handle

def staticmethod_catch_errors(func):
    return staticmethod(catch_errors(func))

class HouseSpider2014(scrapy.Spider):
    year       = '2014'
    name       = 'house2014'

    def start_requests(self):
        self.__clearPickledFile()
        for url in self.__urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        data               = OrderedDict()
        data['state_name'] = self.__getStateFromUrl(response.url)
        data['districts']  = self.__parseDistricts(response)

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
    #              PRIVATE PARSERS                 #
    ################################################

    @catch_errors
    def __parseDistricts(self, response):
        districts         = response.css('article.results-group')
        data              = [self.__parseDistrict(d) for d in districts]

        return data

    @catch_errors
    def __parseDistrict(self, district):
        data                = OrderedDict()
        data['district_id'] = self.__extractDistrictID(district)
        data['candidates']  = self.__extractCandidates(district)

        return data

    @catch_errors
    def __extractDistrictID(self, district):
        full_text = district.xpath('@id').extract_first()
        (as_str,) = re.findall('([0-9]{1,2})', full_text)
        as_num    = int(as_str)

        return as_num

    @catch_errors
    def __extractCandidates(self, district):
        candidates = district.css('table.results-table > tbody > tr')
        return [self.__extractCandidate(c) for c in candidates]

    @catch_errors
    def __extractCandidate(self, candidate):
        data            = OrderedDict()

        data['party']   = self.__extractParty(candidate)
        data['name']    = self.__extractName(candidate)
        data['votes']   = self.__extractVotes(candidate)
        data['percent'] = self.__extractPercent(candidate)
        data['winner']  = self.__extractWinner(candidate)

        return data

    ################################################
    #              PRIVATE STATIC PARSERS          #
    ################################################

    @staticmethod_catch_errors
    def __humanize(state_name):
        words       = state_name.split('-')
        capitalized = ['%s%s' % (w[0].upper(), w[1:].lower()) for w in words]
        return ' '.join(capitalized)

    @staticmethod_catch_errors
    def __getStateFromUrl(url):
        return url.rstrip('/').split('/')[-1]

    @staticmethod_catch_errors
    def __extractStateID(state):
        as_text = state.xpath('@id').extract_first()
        as_num  = int(as_text.split('state')[-1])
        return as_num

    @staticmethod_catch_errors
    def __extractParty(candidate):
        return candidate.css('span.token.token-party > abbr').xpath('@title').extract_first()

    @staticmethod_catch_errors
    def __extractName(party):
        matches = party.css('th.results-name > span.name-combo::text')
        return matches.extract()[-1].strip()

    @staticmethod_catch_errors
    def __extractVotes(party):
        as_text = party.css('td.results-popular::text').extract_first()
        if as_text != None:
            return int(as_text.replace(',',''))

    @staticmethod_catch_errors
    def __extractPercent(party):
        as_text = party.css('td.results-percentage span.number::text').extract_first()
        if as_text != None:
            return round(float(as_text.replace('%','')) * 0.01, 3)

    @staticmethod_catch_errors
    def __extractWinner(candidate):
        return not not candidate.css('span.token.token-winner')

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
        empty_array = []
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
