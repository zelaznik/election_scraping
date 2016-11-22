import scrapy
import json

class QuotesSpider(scrapy.Spider):
    name = 'quotes'

    def start_requests(self):
        base_url = 'http://www.politico.com/2016-election/results/map/house'
        states   = [
           'alabama','alaska','arizona','arkansas','california',
           'colorado','connecticut','delaware','florida','georgia',
           'hawaii','idaho','illinois','indiana','iowa','kansas',
           'kentucky','louisiana','maine','maryland','massachusetts',
           'michigan','minnesota','mississippi','missouri','montana',
           'nebraska','nevada','new-hampshire','new-jersey','new-mexico',
           'new-york','north-carolina','north-dakota','ohio','oklahoma',
           'oregon','pennsylvania','rhode-island','south-carolina',
           'south-dakota','texas','utah','vermont','virginia',
           'washington','west-virginia','wisconsin','wyoming'
        ]

        for state in states:
            url = '%s/%s/' % (base_url, state)
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        state_name       = response.url.rstrip('/').split('/')[-1]
        election_results = response.css('section.content-group.election-results')
        districts        = election_results.css('article.results-group')

        for i, district in enumerate(districts):
            results = self.parse_district(district)
            results.update({'state': state_name, 'district': i})
            with open('election_results.json', 'a') as dst:
                dst.write('%s,\n' % (json.dumps(results),))

    def parse_district(self, district):
        republican, *_ = district.css('tr.type-republican')
        democrat, *_   = district.css('tr.type-democrat')

        return {
            'republican': self.parse_party(republican),
            'democrat':   self.parse_party(democrat)
        }

    def parse_party(self, party):
        return {
            'votes':      party.css('td.results-popular::text').extract_first(),
            'percentage': party.css('td.results-percentage span.number::text').extract_first(),
            'name':       party.css('th.results-name > span.name-combo::text').extract()[-1].strip()            
        }