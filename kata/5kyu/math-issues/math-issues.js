// https://www.codewars.com/kata/5267faf57526ea542e0007fb

Math.round = function (number) {
  const roundedDown = parseInt(number)
  return number - roundedDown >= 0.5 ? roundedDown + 1 : roundedDown
}

Math.ceil = function (number) {
  const roundedDown = parseInt(number)
  return number - roundedDown > 0 ? roundedDown + 1 : number
}

Math.floor = function (number) {
  return (roundedDown = parseInt(number))
}

Math.round(0.4) // -> 0
Math.round(0.5) // -> 1

Math.ceil(0.4) // -> 1
Math.ceil(0.5) // -> 1

Math.floor(0.4) // -> 0
Math.floor(0.5) // -> 0
