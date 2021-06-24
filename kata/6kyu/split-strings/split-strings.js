// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

const solution = (str) => {
  let output = []
  for (let i = 0; i < str.length; i += 2) {
    output.push(str.slice(i, i + 2))
  }

  return output.map((val) => (val.length < 2 ? `${val}_` : val))
}

solution('abc') // -> should return ['ab', 'c_']
solution('abcdef') // -> should return ['ab', 'cd', 'ef']
