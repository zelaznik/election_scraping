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

def default_args(chamber, year):
    base_path           = '%(year)s_%(chamber)s_results' % locals()
    json_path           = 'output/%(chamber)s/%(year)s/%(base_path)s_politico.json' % locals()
    json_path_national  = 'post_processing/%(chamber)s/%(year)s/%(base_path)s_national.json' % locals()
    excel_path_national = 'post_processing/%(chamber)s/%(year)s/%(base_path)s_national.xlsx' % locals()
    
    return locals().copy()

def main(base_path, json_path, json_path_national, excel_path_national, **kwargs):
    try:
        with open(json_path, 'r') as f:
            raw_data = json.loads(f.read(), object_pairs_hook=OrderedDict)

        ct = 0
        national_districts = []
        for state in raw_data:
            for district in (state['results'],):
                new_district                   = OrderedDict()
                new_district['state_name']     = state['state_name']

                vote_totals = defaultdict(int)
                for candidate in district['candidates']:
                    vote_totals[candidate['party']] += candidate.get('votes') or 0

                for party in sorted(vote_totals, key=vote_totals.get, reverse=True):
                    new_district['%s_votes' % (party.lower(),)] = vote_totals[party]

                national_districts.append(new_district)
                ct += 1

        assert (ct == 50), "expected 50, got %s" % (ct,)

        with open(json_path_national, 'w') as f:
            f.write(json.dumps(national_districts, indent=2))

        with open(json_path_national, 'r') as f:
            national_json = json.loads(f.read())

        excel_fields = ['state_name','democratic_votes','republican_votes','green_votes','libertarian_votes']
        df = pd.DataFrame(national_json)[excel_fields]
        df.to_excel(excel_path_national, index=True)

    finally:
        globals().update(locals())

if __name__ == '__main__':
    year      = int(sys.argv[1])
    kwargs    = default_args('president', year)
    main(**kwargs)