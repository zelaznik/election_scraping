from collections import OrderedDict
from functools import partial

from .congress_spider import CongressSpider
from tutorial.helpers import catch_errors

class HouseSpider(CongressSpider):
    chamber = 'house'

    def parse(self, state_name, response):
        data               = OrderedDict()
        data['state_name'] = self._humanize(state_name)
        data['districts']  = self._parseDistricts(response)

        yield data

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

class HouseSpider2016(HouseSpider):
    name   = 'house2016'
    year   = '2016'
    cached = True

class HouseSpider2014(HouseSpider):
    name   = 'house2014'
    year   = '2014'
    cached = True

class HouseSpider2012(HouseSpider):
    name   = 'house2012'
    year   = '2012'
    cached = True
