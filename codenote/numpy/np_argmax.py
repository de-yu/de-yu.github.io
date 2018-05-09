import numpy as np


number = np.array([5,6,4,8,7])

print(np.argmax([5,6,4,8,7]))
# 計算最大值的 index

number = np.array([[5,3,4,8,5,6,9],[9,8,7,4,5,8,9]])


print(np.argmax(number , axis=1))
#axis=1 分別計算兩組的最大值 index