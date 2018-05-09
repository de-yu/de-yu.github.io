
## numpy api
### 提供基礎的 numpy api 說明

* arange 回傳指定範圍的陣列

        np.arange(0,5)

        [0,1,2,3,4]

* argmax 回傳陣列中最大值的 index

        np.argmax([5,6,4,8,7])
        3

* random.choice(a, size=None, replace=True, p=None)  隨機挑選數字

        從 a 中隨機挑選 size 個數字
        np.random.choice(100, 10)
        [97 88 91 30 86 64 91 44 22 34]