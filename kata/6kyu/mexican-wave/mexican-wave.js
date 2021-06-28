// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

const wave = (str) => {
  const arr = str.split('').map((letter, i) => (letter === ' ' ? ' ' : str))
  return arr
    .map((val, i) => {
      if (val !== ' ') {
        let output = val.split('')
        output[i] = output[i].toUpperCase()
        return output.join('')
      }
    })
    .filter((val) => val !== undefined)
}

wave('hello')
// -> ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

wave('two words')
// -> ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']
