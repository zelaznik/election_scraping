from collections import OrderedDict, defaultdict
from operator import itemgetter
import pandas as pd
import json

EPSILON = 10**-6

def show(obj):
    print(json.dumps(obj, indent=2))

def get_totals(df):
    totals_columns = ['contested','democrat_votes','democrat_winner','republican_votes','republican_winner']
    totals         = pd.DataFrame(df, columns=totals_columns).sum().map(int)

def main(base_path = '2016_senate_results'):
    try:
        json_path           = '%s.json' % (base_path,)
        excel_path          = '%s.xlsx' % (base_path,)

        json_path_national  = '%s_national.json' % (base_path,)
        excel_path_national = '%s_national.xlsx' % (base_path,)

        with open(json_path, 'r') as f:
            raw_data = json.loads(f.read(), object_pairs_hook=OrderedDict)

        ct = 0
        national_results = []
        for state in raw_data:
            ct += 1

            results                   = state['results']
            new_results               = OrderedDict()
            new_results['state_name'] = state['state_name']
            vote_totals               = defaultdict(int)

            for candidate in results['candidates']:
                vote_totals[candidate['party']] += candidate.get('votes') or 0

            for party in sorted(vote_totals, key=vote_totals.get, reverse=True):
                new_results['%s_votes' % (party.lower(),)] = vote_totals[party]

            national_results.append(new_results)

        if (ct != 34):
            print("expected 34, got %s" % (ct,))

        with open(json_path_national, 'w') as f:
            f.write(json.dumps(national_results, indent=2))

        with open(json_path_national, 'r') as f:
            national_json = json.loads(f.read())

        excel_fields = ['state_name','democratic_votes','republican_votes','green_votes','libertarian_votes']
        df = pd.DataFrame(national_json)[excel_fields]
        df.to_excel(excel_path_national, index=True)

    finally:
        globals().update(locals())

if __name__ == '__main__':
    main()
