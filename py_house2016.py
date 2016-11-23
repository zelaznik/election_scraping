from collections import OrderedDict, defaultdict
from operator import itemgetter
import pandas as pd
import json
import sys

EPSILON = 10**-6

def show(obj):
    print(json.dumps(obj, indent=2))

def get_totals(df):
    totals_columns = ['contested','democrat_votes','democrat_winner','republican_votes','republican_winner']
    totals         = pd.DataFrame(df, columns=totals_columns).sum().map(int)

def main(base_path = '2016_house_results'):
    try:
        json_path           = '%s.json' % (base_path,)
        excel_path          = '%s.xlsx' % (base_path,)
        json_path_national  = '%s_national.json' % (base_path,)
        excel_path_national = '%s_national.xlsx' % (base_path,)

        with open(json_path, 'r') as f:
            raw_data = json.loads(f.read(), object_pairs_hook=OrderedDict)

        ct = 0
        national_districts = []
        for state in raw_data:
            for district in state['districts']:
                new_district                   = OrderedDict()
                new_district['state_name']     = state['state_name']
                new_district['district_id']    = district['district_id']

                vote_totals = defaultdict(int)
                for candidate in district['candidates']:
                    vote_totals[candidate['party']] += candidate.get('votes') or 0

                for party in sorted(vote_totals, key=vote_totals.get, reverse=True):
                    new_district['%s_votes' % (party.lower(),)] = vote_totals[party]

                national_districts.append(new_district)
                ct += 1

        assert (ct == 435), "expected 435, got %s" % (ct,)

        with open(json_path_national, 'w') as f:
            f.write(json.dumps(national_districts, indent=2))

        with open(json_path_national, 'r') as f:
            national_json = json.loads(f.read())

        excel_fields = ['state_name','district_id','democratic_votes','republican_votes','green_votes','libertarian_votes']
        df = pd.DataFrame(national_json)[excel_fields]
        df.to_excel(excel_path_national, index=True)

    finally:
        globals().update(locals())

if __name__ == '__main__':
    try:
        year = sys.argv[1]
    except IndexError:
        year = 2016

    base_path = '%s_house_results' % (year,)
    main(base_path)