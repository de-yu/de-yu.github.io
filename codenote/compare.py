

import pandas as pd
import numpy as np
from matplotlib import pyplot as plt
import seaborn as sns
from sklearn.preprocessing import LabelEncoder
from sklearn.decomposition import PCA


data = pd.read_csv("mushrooms.csv")

#print(data.head(6))

# 計算缺失值
#print(data.isnull().sum())

#輸出種類
#print(data['class'].unique())

#計算特徵種類 和資料數量
print(data.shape)

# 將字串的特徵值 轉換成數字
labelencoder=LabelEncoder()
for col in data.columns:
    data[col] = labelencoder.fit_transform(data[col])
 
#print(data.head())

#檢查資料

print(data['stalk-color-above-ring'].unique())


print(data.groupby('class').size())

#檢查資料分布  箱型圖
"""
fig, axes = plt.subplots(nrows=2 ,ncols=2 ,figsize=(9, 9))

bp1 = axes[0,0].boxplot(data['stalk-color-above-ring'],patch_artist=True)

bp2 = axes[0,1].boxplot(data['stalk-color-below-ring'],patch_artist=True)

bp3 = axes[1,0].boxplot(data['stalk-surface-below-ring'],patch_artist=True)

bp4 = axes[1,1].boxplot(data['stalk-surface-above-ring'],patch_artist=True)
"""

#資料分類

X = data.iloc[: , 1:23]
y = data.iloc[: , 0]

#意義不明 待查
#print(data.corr())

pca = PCA()
pca.fit_transform(X)

covariance=pca.get_covariance()
explained_variance=pca.explained_variance_


with plt.style.context('dark_background'):
    plt.figure(figsize=(6, 4))
    
    plt.bar(range(22), explained_variance, alpha=0.5, align='center',
            label='individual explained variance')
    plt.ylabel('Explained variance ratio')
    plt.xlabel('Principal components')
    plt.legend(loc='best')
    plt.tight_layout()
