from collections import OrderedDict
from operator import itemgetter
from functools import partial

from .congress_spider import CongressSpider
from tutorial.helpers import catch_errors, staticmethod_catch_errors

class PresidentSpider(CongressSpider):
    chamber = 'president'
    cached  = True

    def parse(self, state_name, response):
        data               = OrderedDict()
        data['state_name'] = self._humanize(state_name)
        data['results']    = self._parseState(response)

        yield data

    @catch_errors
    def _extractCandidates(self, overall_results):
        candidates = overall_results.css('tr')
        return [self._extractCandidate(c) for i,c in enumerate(candidates)]

class PresidentSpider2016(PresidentSpider):
    name   = 'president2016'
    year   = '2016'
    cached = True

    @catch_errors
    def _parseState(self, response):
        overall_results = response.css('.overall .results-dataset')
        return {'candidates': self._extractCandidates(overall_results)}

    @staticmethod_catch_errors
    def _extractName(party):
        return party.css('span.name-combo::text').extract()[-1].strip()

class PresidentSpider2012(PresidentSpider):
    name   = 'president2012'
    year   = '2012'
    cached = True

    @catch_errors
    def _parseState(self, response):
        overall_results = response.css('.state-results-table.state-results-macro > table > tbody')
        return {'candidates': self._extractCandidates(overall_results)}

    @catch_errors
    def _parseDistricts(self, response):

        candidates      = self._extractCandidates()
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
