from collections import OrderedDict
import pandas as pd
import json

EPSILON = 10**-6

def show(obj):
    print(json.dumps(obj, indent=2))

def get_totals(df):
    totals_columns = ['contested','democrat_votes','democrat_winner','republican_votes','republican_winner']
    totals         = pd.DataFrame(df, columns=totals_columns).sum().map(int)

def main(json_path = '2016_house_results.json', excel_path = '2016_house_results.xlsx'):
    with open(json_path, 'r') as f:
        raw_data = json.loads(f.read(), object_pairs_hook=OrderedDict)

    ct = 0
    national_districts = []
    for state in raw_data:
        for district in state['districts']:
            new_district                = OrderedDict()
            new_district['state_name']  = state['state_name']
            new_district['district_id'] = district['district_id']
            new_district['candidates']  = district['candidates']

            national_districts.append(new_district)
            ct += 1

    assert (ct == 435), "expected 435, got %s" % (ct,)

    with open('2016_house_results_national.json', 'w') as f:
        f.write(json.dumps(national_districts, indent=2))

if __name__ == '__main__':
    main()
