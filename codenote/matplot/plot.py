
"""

scatter 畫點
plot 畫線
hist 直方圖

"""
import numpy as np
from matplotlib import pyplot as plt

x = np.linspace(-5,5,50)
siny = np.sin(x)

#plot.scatter(x , siny)
#plt.plot(x , siny)

data = np.random.normal(size = 1000)

plt.hist(data)