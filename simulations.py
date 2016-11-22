import pandas as pd

def series_to_dict(series):
    return dict(zip(series.index, series))

def add_comparison_column(df):
    df['equal'] = df[df['expected'] == df['actual']]

df = pd.read_json('house_results.json')

def check_expected_districts(df):
    expected_districts = pd.Series({"New Mexico": 3, "South Carolina": 7, "Louisiana": 6, "Washington": 10,
        "California": 53, "Arizona": 9, "Minnesota": 8, "Alaska": 1, "Georgia": 14, "Pennsylvania": 18,
        "Maryland": 8, "Indiana": 9, "Idaho": 2, "Utah": 4, "Delaware": 1, "Maine": 2, "Kansas": 4,
        "West Virginia": 3, "Tennessee": 9, "Illinois": 18, "Oklahoma": 5, "Alabama": 7, "North Dakota": 1,
        "Vermont": 1, "New Hampshire": 2, "Missouri": 8, "Nevada": 4, "New York": 27, "Oregon": 5,
        "Wisconsin": 8, "Ohio": 16, "South Dakota": 1, "Arkansas": 4, "Montana": 1, "Nebraska": 3,
        "Iowa": 4, "Virginia": 11, "Colorado": 7, "Michigan": 14, "Texas": 36, "Massachusetts": 9,
        "Hawaii": 2, "Rhode Island": 2, "Kentucky": 6, "Connecticut": 5, "Wyoming": 1, "Mississippi": 4,
        "North Carolina": 13, "New Jersey": 12, "Florida": 27
    })

    expected_districts.index.name = 'state_name'
    actual_districts = df.groupby(['state_name'])['state_name'].count()

    check_districts = pd.DataFrame({'expected_districts': expected_districts, 'actual_districts': actual_districts})
    check_districts['equal'] = check_districts[check_districts.expected_districts == check_districts.actual_districts]


contested = df[df.contested]

raw_columns = ['state_name','district','contested']
raw = pd.DataFrame(df, columns=[''])

totals_columns = ['contested','democrat_votes','democrat_winner','republican_votes','republican_winner']
totals         = pd.DataFrame(df, columns=totals_columns).sum().map(int)

with all_districts as df:
    del df['other_candidates']
    contested = df[df.contested]


