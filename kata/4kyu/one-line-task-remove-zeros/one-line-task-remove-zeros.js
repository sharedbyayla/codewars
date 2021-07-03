// https://www.codewars.com/kata/58fecb82f3dff0a347000018
// goal code length <= 53

removeZeros=a=>a.join('').replace(/0/g,' ').trim().replace(/ /g,0).split('').map(n=>parseInt(n)) // 96 chars

removeZeros([0, 9, 0, 4]) // -> [9, 0, 4]
removeZeros([0, 9, 5, 0, 0, 0, 0, 2, 0, 0]) // -> [9, 5, 0, 0, 0, 0, 2]
removeZeros([1, 6, 0, 2]) // -> [1, 6, 0, 2]
removeZeros([1, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) // -> [1, 0, 2, 3]

