"""

plt


figure 建立畫布
axes 劃出矩形
set_title 標題
set_xlabel x軸說明
set_ylabel y軸說明
savefig('image.jpg') 儲存圖 需印入pip install pillow
"""

from matplotlib import pyplot as plt


fig = plt.figure(figsize=(16,6))

#
p = plt.axes((0.1, 0.2, 0.3, 0.4), facecolor='w')
p.set_title("title")
p.set_xlabel("xlabel")
p.set_ylabel("ylabel")
plt.savefig('image.jpg')
plt.show()