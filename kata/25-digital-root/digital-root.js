// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

const digital_root = (n) => {
  numArr = n.toString().split('').map(x => parseInt(x))
  if (numArr.length == 1) return numArr[0]
    
  return digital_root(numArr.reduce((sum, num) => sum += num), 0)
}

digital_root(16) // ->  1 + 6 = 7
digital_root(942) // -> 9 + 4 + 2 = 15  -->  1 + 5 = 6
digital_root(132189) // ->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
digital_root(493193) // ->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2