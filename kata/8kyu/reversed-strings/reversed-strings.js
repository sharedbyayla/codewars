// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

const solution = (str) => {
  return str.split('').reverse('').join('')
}

solution('world') // -> 'dlrow'
solution('hello') // -> 'olleh'
solution('') // -> ''
solution('h') // -> 'h'
