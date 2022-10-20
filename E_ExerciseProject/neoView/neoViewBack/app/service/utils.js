'use strict'

function range(l, h) {
  return [...Array(h-l+1)].map((e, i)=>i + l)
}

function rangeArr(l, h, interval){
  let arr = range(0, Math.ceil((h-l)/interval) - 1).map(k=>{
    return [l+k*interval, l+(k+1)*interval]
  })
  arr[arr.length-1][1] = h
  return arr
}
function filterVoutByN(vout, n){
  let filtered = vout.filter(tx=>{
    if (tx.n === n) {
      return true
    } else {
      return false
    }
  })
  return filtered[0]
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

module.exports= {
  range: range,
  filterVoutByN: filterVoutByN,
  sleep: sleep,
  rangeArr: rangeArr
}
