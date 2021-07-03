// https://www.codewars.com/kata/526dbd6c8c0eb53254000110

const alphanumeric = (string) => {
  const regexp = new RegExp(/[a-z||0-9]/gi)
  return string.match(regexp)
    ? string.match(regexp).length === string.length
    : false
}

alphanumeric('Mazinkaiser') // -> true
alphanumeric('hello world_') // -> false
alphanumeric('PassW0rd') // -> true
alphanumeric('     ') // -> false
