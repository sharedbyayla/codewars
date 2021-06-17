// https://www.codewars.com/kata/55c45be3b2079eccff00010f

const order = (words) => {
  words = words.split(' ')
  const output = []

  for (let i = 1; i <= words.length; i++) {
    output.push(words.filter((word) => word.includes(i)))
  }

  return output.join(' ')
}

order('is2 Thi1s T4est 3a') // -> "Thi1s is2 3a T4est"
order('4of Fo1r pe6ople g3ood th5e the2') // -> "Fo1r the2 g3ood 4of th5e pe6ople"
order('') // -> ""
