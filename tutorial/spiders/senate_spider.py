from collections import OrderedDict
from operator import itemgetter
from functools import partial

from .congress_spider import CongressSpider
from tutorial.helpers import catch_errors

class SenateSpider(CongressSpider):
    chamber = 'senate'
    cached  = True

    def parse(self, state_name, response):
        data               = OrderedDict()
        data['state_name'] = self._humanize(state_name)
        data['results']    = self._parseState(response)

        yield data

    @catch_errors
    def _parseState(self, response):
        state  = response.css('.overall .results-dataset')
        return {'candidates': self._extractCandidates(state)}


class SenateSpider2016(SenateSpider):
    name   = 'senate2016'
    year   = '2016'
    cached = True

class SenateSpider2014(SenateSpider):
    name   = 'senate2014'
    year   = '2014'
    cached = True
