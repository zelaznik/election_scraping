import scrapy, json, os, re
from collections import OrderedDict
from contextlib import suppress

class HouseSpider2012(scrapy.Spider):
    name         = 'house2012'

    def start_requests(self):
        self.__clearPickledFile()
        for url in self.__urls():
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        state_name       = response.url.rstrip('/').split('/')[-1]
        election_results = response.css('section.content-group.election-results')
        districts        = election_results.css('article.results-group')

        for i, district in enumerate(districts):
            district_number = i+1
            pure_results    = self.__parseDictrict(district)
            new_results     = self.__concatDistrictData(state_name, district_number, pure_results)
            self.__appendPickledFile(new_results)

    ################################################
    #              PRIVATE METHODS                 #
    ################################################

    __outputPath = '2012_house_results.json'
    __baseUrl    = 'http://www.politico.com/2012-election/results/map/house'
    __states     = ('alabama','alaska','arizona','arkansas','california',
                   'colorado','connecticut','delaware','florida','georgia',
                   'hawaii','idaho','illinois','indiana','iowa','kansas',
                   'kentucky','louisiana','maine','maryland','massachusetts',
                   'michigan','minnesota','mississippi','missouri','montana',
                   'nebraska','nevada','new-hampshire','new-jersey','new-mexico',
                   'new-york','north-carolina','north-dakota','ohio','oklahoma',
                   'oregon','pennsylvania','rhode-island','south-carolina',
                   'south-dakota','tennessee','texas','utah','vermont','virginia',
                   'washington','west-virginia','wisconsin','wyoming')

    @staticmethod
    def __humanize(state_name):
        words       = state_name.split('-')
        capitalized = ['%s%s' % (w[0].upper(), w[1:].lower()) for w in words]
        return ' '.join(capitalized)

    def __concatDistrictData(self, state_name, district, pure_results):
        new_results               = OrderedDict()
        new_results['state_name'] = self.__humanize(state_name)
        new_results['district']   = district

        for key in pure_results:
            new_results[key] = pure_results[key]

        return new_results

    def __readPickledFile(self):
        with open(self.__outputPath, 'r') as f:
            return json.loads(f.read(), object_pairs_hook=OrderedDict)

    def __overwritePickledFile(self, data):
        with open(self.__outputPath, 'w') as f:
            f.write(json.dumps(data, indent=2))

    def __clearPickledFile(self):
        blank_data = []
        self.__overwritePickledFile(blank_data)

    def __appendPickledFile(self, district_results):
        prev_results = self.__readPickledFile()
        all_results  = prev_results + [district_results]
        self.__overwritePickledFile(all_results)

    def __urls(self):
        for state in self.__states:
            yield '%s/%s/' % (self.__baseUrl, state)

    def __parseDictrict(self, district):
        data   = OrderedDict()
        handle = self.__handler()

        democrat   = handle(self.__getDemocrats, district)
        republican = handle(self.__getRepublicans, district)
        other      = handle(self.__getIndependents, district)

        data['contested']          = bool(democrat and republican)
        data['democrat_name']      = democrat   and democrat.get('name')
        data['republican_name']    = republican and republican.get('name')
        data['democrat_votes']     = democrat   and democrat.get('votes')
        data['republican_votes']   = republican and republican.get('votes')
        data['democrat_percent']   = democrat   and democrat.get('percent')
        data['republican_percent'] = republican and republican.get('percent')
        data['democrat_winner']    = democrat.get('winner') if democrat else False
        data['republican_winner']  = republican.get('winner') if republican else False
        data['other_candidates']   = other

        return data

    def __getDemocrats(self, district):
        with suppress(IndexError):
            return self.__parseParty(district.css('tr.type-democrat')[-1])

    def __getRepublicans(self, district):
        with suppress(IndexError):
            return self.__parseParty(district.css('tr.type-republican')[-1])

    def __getIndependents(self, district):
        independents = district.css('tr.type-independent')
        return [self.__parseParty(i) for i in independents]

    def __parseParty(self, party):
        data                 = OrderedDict()
        handle               = self.__handler()

        data['winner']       = handle(self.__extractWinner,     party)
        data['name']         = handle(self.__extractName,       party)
        data['votes']        = handle(self.__extractVotes,      party)
        data['percent']      = handle(self.__extractPercentage, party)

        return data

    def __extractWinner(self, party):
        return not not party.css('span.token.token-winner').extract_first()

    def __extractName(self, party):
        matches = party.css('th.results-name > span.name-combo::text')
        return matches.extract()[-1].strip()

    def __extractVotes(self, party):
        as_text = party.css('td.results-popular::text').extract_first()
        if as_text != None:
            return int(as_text.replace(',',''))

    def __extractPercentage(self, party):
        as_text = party.css('td.results-percentage span.number::text').extract_first()
        if as_text != None:
            return round(float(as_text.replace('%','')) * 0.01, 3)

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
