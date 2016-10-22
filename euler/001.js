let m3or5 = x => (x%3 == 0) || (x%5 == 0)
let range = (max, min=1) => min == max-1 ? [min] : [min,...range(max,min+1)]
let sumBelow = x => range(x).filter(m3or5).reduce((a,b)=>a+b)
sumBelow(10)
sumBelow(1000)
