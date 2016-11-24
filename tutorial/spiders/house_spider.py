from collections import OrderedDict
from functools import partial

from .congress_spider import CongressSpider
from tutorial.helpers import catch_errors, staticmethod_catch_errors

class HouseSpider(CongressSpider):
    chamber = 'house'
    cached  = True

    def parse(self, state_name, response):
        data               = OrderedDict()
        data['state_name'] = self._humanize(state_name)
        data['districts']  = self._parseDistricts(response)

        yield data

    @catch_errors
    def _parseDistricts(self, response):
        districts = response.css('article.results-group')
        return [self._parseDistrict(d, i+1) for (i,d) in enumerate(districts)]

    @catch_errors
    def _parseDistrict(self, district, index):
        data                = OrderedDict()
        data['district_id'] = index
        data['candidates']  = self._extractCandidates(district)

        return data

class HouseSpider2016(HouseSpider):
    name   = 'house2016'
    year   = '2016'

class HouseSpider2014(HouseSpider):
    name   = 'house2014'
    year   = '2014'

class HouseSpider2012(HouseSpider):
    name   = 'house2012'
    year   = '2012'

    @catch_errors
    def _parseDistricts(self, response):
        districts = response.css('.state-results-table > table tbody[id^="district"]')
        return [self._parseDistrict(d, i+1) for (i,d) in enumerate(districts)]

    @property
    def _baseUrl(self):
        if self.cached:
            return 'http://localhost:8000/cached_websites/%s/%s' % (self.chamber, self.year)
        else:
            return 'http://www.politico.com/%s-election/results/%s' % (self.year, self.chamber)

    ################################################
    #              PROTECTED PARSERS               #
    ################################################

    @catch_errors
    def _extractCandidates(self, district):
        candidates = district.css('tr')
        return [self._extractCandidate(c) for c in candidates]

    ################################################
    #            PROTECTED STATIC PARSERS          #
    ################################################

    @staticmethod_catch_errors
    def _extractParty(candidate):
        return candidate.css('abbr').xpath('@title').extract_first()

    @staticmethod_catch_errors
    def _extractName(party):
        matches = party.css('th.results-candidate::text')
        return matches.extract()[-1].strip()

    @staticmethod_catch_errors
    def _extractVotes(party):
        as_text = party.css('td.results-popular::text').extract_first()
        if as_text != None:
            return int(as_text.replace(',',''))

    @staticmethod_catch_errors
    def _extractPercent(party):
        as_text = party.css('td.results-percentage::text').extract_first()
        if as_text != None:
            return round(float(as_text.replace('%','')) * 0.01, 3)

    @staticmethod_catch_errors
    def _extractWinner(candidate):
        return not not candidate.css('span.winner-check')
