
## Binarizer

    以 threshold 為基準 
    > threshold = 1
    < threshold = 0


##LabelBinarizer

    將字串映射為數字
    數字為二值化

##LabelEncoder

    將字串映射為數字
    數字為常數

##MaxAbsScaler

    每數除以每行絕對值中的最大值
    x / abs(max(X))

##MinMaxScaler

    將每行最小的數設為0 最大為1其餘以比例進行計算
    標準化: 
    X_std = (X - X.min) / (X.max - X.min)
    結果:
    x = X_std * (X.max - X.min) + X.min

##MultiLabelBinarizer
  
    和 LabelBinarizer 相似
    差別在這個可以一次輸入多組資料

##Normalizer

##PolynomialFeatures

    產生新的特徵

##RobustScaler

    標準化數字
    減去中位數除以四分位距

##StandardScaler
  

##add_dummy_feature
    
    添加新資料
    添加在第一列