# -*- coding: utf-8 -*-
"""
Created on Mon Oct  2 20:47:17 2017

@author: user
"""

import numpy  #數字運算
from sklearn.tree import DecisionTreeRegressor  # 決策樹
from sklearn.preprocessing import LabelEncoder  # 將string 替換成 int
from sklearn.model_selection import train_test_split # 將資料集劃分
from sklearn.externals import joblib  #將 model 儲存下來
from sklearn.metrics import accuracy_score #測試predict 資料正確
import pandas as pd  # 讀取 csv file


data = pd.read_csv("mushrooms.csv")  #讀取資料



labelencoder = LabelEncoder()  
for col in data.columns:
    data[col] = labelencoder.fit_transform(data[col])
    

y = data['class'].tolist()  # 答案 y
X = data.iloc[0:,1:].values.tolist() # 運算數值



X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

clf = DecisionTreeRegressor(max_depth=8)

print(numpy.shape(X_train))
print(numpy.shape(X_test))

clf.fit(X_train,y_train)

predict_y = clf.predict(X_test).round() #資料會在0~1之間 用 round 取得最靠近的整數

print(accuracy_score(y_test , predict_y))

"""
joblib.dump(clf , "clf.plk")

clf2 = joblib.load("clf.plk")

print(clf2.score(X_test , y_test))

"""