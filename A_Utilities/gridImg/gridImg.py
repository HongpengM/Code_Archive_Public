# -*- coding: utf-8 -*-

from PIL import Image
from PIL import ImageDraw
import os

input_img = './white.png'

# 生成格网
(filepath,filename) = os.path.split(input_img)
img = Image.open(input_img)
img_d = ImageDraw.Draw(img)
x_len, y_len = img.size
x_step = x_len//8
y_step = y_len//8
print (x_len)
print (y_len)
for x in range(0, x_len, x_step):
    img_d.line(((x, 0), (x, y_len)), (125, 125, 125))
for y in range(0, y_len, y_step):
    j = y_len - y - 1
    img_d.line(((0, j), (x_len, j)), (125, 125, 125))
img.save(os.path.join(filepath,"grid_"+filename) )

# 为格网编码 左下角开始
cnt = 1
for i in range(0,x_len,x_step):
    img_d.text((i,y_len-y_step), str(cnt).encode("utf8"),fill=(255,0,0))
    cnt+=1
cnt = 1
for j in range(y_step,y_len,y_step):
    z = y_len - j
    img_d.text((0,z), str(cnt).encode("utf8"),fill=(255,0,0) )
    cnt+=1
img.save(os.path.join(filepath, "grid_geocoding_"+filename))
