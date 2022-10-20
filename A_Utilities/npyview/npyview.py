import numpy as np

img_array = np.load('/Users/k/Documents/_WorkingQueue/Graduate Projects/Final_Project/BackupPlan/HiC3DViewer/hicViewer/data/Human/K562_counts2.npy')
old_shape = img_array.shape
img_array = img_array.reshape(-1,)

max_ = 1
for i in range(len(img_array)):
    img_array[i] = max_ if img_array[i] > max_ else img_array[i]
img_array = img_array.reshape(old_shape)
print(np.max(img_array))
print(np.min(img_array))
print(np.sum(img_array))
from matplotlib import pyplot as plt

plt.imshow(img_array, cmap='gray')
plt.show()
