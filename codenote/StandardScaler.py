import pandas as pd
import numpy as np

from sklearn.preprocessing import StandardScaler

data = [[1,2,3],[8,5,6],[4,3,5]]

scaler = StandardScaler()
scaler.fit(data)

#直的一組
# (x - x.mean)/x.scale
# scale 標準差
# var_ 是變異數
# 程式在計算 z-score
# if with_std = False  每個數都減掉 平均值
# if with_mean = False 每個數在計算時 不會減去平均值

print(((2-3.33)**2 + (5-3.33)**2 + (3-3.33)**2 )/3)
print("StandardScaler scale_ :\n" , scaler.scale_)
print("StandardScaler mean_  :\n" , scaler.mean_ )
print("StandardScaler var_  :\n" , scaler.var_ )
print("StandardScaler n_samples_seen_  :\n" , scaler.n_samples_seen_ )

print(scaler.fit_transform(data))
