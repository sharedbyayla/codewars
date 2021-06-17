// https://www.codewars.com/kata/56747fd5cb988479af000028

const getMiddle = (s) => {
  const middleIdx = parseInt(s.length / 2)
  return s.length % 2 ? s[middleIdx] : `${s[middleIdx - 1]}${s[middleIdx]}`
}

getMiddle('test') // -> "es"
getMiddle('testing') // -> "t"
getMiddle('middle') // -> "dd"
getMiddle('A') // -> "A"
