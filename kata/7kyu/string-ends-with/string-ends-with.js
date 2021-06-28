// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

const solution = (str, ending) => {
  return str.substring(str.length - ending.length) === ending
}

solution('abcde', 'cde') // -> true
solution('abcde', 'abc') // -> false
