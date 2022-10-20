import pickle
from mdsAlg import MDS 
import numpy as np
import pandas as pd

with open('freq.pkl','rb') as f:
    freq = pickle.load(f)

with open('neo.pkl','rb') as f:
    neo = pickle.load(f)

with open('neoGas.pkl','rb') as f:
    neoGas = pickle.load(f)

mds = MDS()
freq3d = mds.fit(freq)
neo3d = mds.fit(neo)
neoGas3d = mds.fit(neoGas)

def write3dtext(data, filename):
    txt = ''
    for i in range(data.shape[0]):
        txt +=str(i) + ',' + str(data[i, 0]) + ',' +  str(data[i, 1]) + ',' +  str(data[i, 2]) + '\n'
    with open(filename, 'w') as f:
        f.write(txt)

write3dtext(freq3d, 'freq3d.txt')
write3dtext(neo3d, 'neo3d.txt')
write3dtext(neoGas3d, 'neoGas3d.txt')
