import pandas as pd
import numpy as np

from sklearn.preprocessing import add_dummy_feature

# 添加新的資料列在第一行
# 添加值為 value 預設為 1
data = [[1,2],[5,9]]

add = add_dummy_feature(data , value = 2)

print(add)
