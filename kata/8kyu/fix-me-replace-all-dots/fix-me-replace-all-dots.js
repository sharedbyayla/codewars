// https://www.codewars.com/kata/596c6eb85b0f515834000049

const replaceDots = (str) => {
  return str.replace(/\./g, '-')
}

replaceDots('one.two.three') // -> "one-two-three"
