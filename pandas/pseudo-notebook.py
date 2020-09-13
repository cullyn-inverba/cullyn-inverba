# %%
import pandas as pd
# %%
titanic = pd.read_csv('data/titanic.csv')
summer = pd.read_csv('data/summer.csv', index_col = 'Athlete')
# %%
# Selecting a columns
titanic["age"]
# %%
# Selecting multiple columns
titanic[["sex", "age"]]
# %%
# Dot notation selection
titanic.age
# %%
# Selecting Rows with
summer.iloc[1]
# %%
# Selecting multiple rows
summer.iloc[[1,2,3]]
# Slicing
summer.iloc[1:4]
summer.iloc[:5]
# %%
# Selecting rows and columns [rows, columns]
summer.iloc[0, 4]
# Works with slicing
summer.iloc[:10, 2:5]
# %%
# Label based indexing
summer.loc['PHELPS, Michael']
# %%
# Label based indexing columns and rows
summer.loc['PHELPS, Michael', "Medal"]
summer.loc[['PHELPS, Michael', 'LEWIS, Carl'], ["Medal", "Event"]]
summer.loc[:, ["Medal", "Event"]]
# %%
# Re-indexing 
summer.reindex()
