import numpy as np

number = np.random.randn(5, 10)
num_nor = np.random.normal(size = 100000)#np.random.randn 返回一個 5*10 裡面為常態分布的隨機亂數  回傳陣列
num_uni = np.random.uniform(size = 100000) # 生成 100000 組介於 0 與 1 之間均勻分配隨機變數

print(number)


#num_nor 生成 100000 組標準常態分配（平均值為 0，標準差為 1 的常態分配）隨機變數