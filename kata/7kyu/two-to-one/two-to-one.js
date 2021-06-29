// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

const longest = (s1, s2) => {
  const string = s1 + s2
  const output = []
  string
    .split('')
    .filter((val) => (!output.includes(val) ? output.push(val) : null))
  return output.sort().join('')
}

longest('aretheyhere', 'yestheyarehere') // -> "aehrsty"
longest('loopingisfunbutdangerous', 'lessdangerousthancoding') // -> "abcdefghilnoprstu"
longest('inmanylanguages', 'theresapairoffunctions') // -> "acefghilmnoprstuy"
