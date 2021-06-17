// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

const firstNonRepeatingLetter = (s) => {
  s = s.split('')
  let output = ''
  let lowercase = [...s]
  lowercase.map((letter, i) => (lowercase[i] = letter.toLowerCase()))
  lowercase.forEach((letter, i) => {
    if (!output) {
      let copy = [...lowercase]
      const target = copy.splice(i, 1)[0]
      if (!copy.includes(target)) output = target
    }
  })

  return output ? s[lowercase.indexOf(output)] : ''
}

firstNonRepeatingLetter('a') // -> 'a'
firstNonRepeatingLetter('stress') // -> 't'
firstNonRepeatingLetter('moonmen') // -> 'e'
