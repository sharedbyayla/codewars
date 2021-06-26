// https://www.codewars.com/kata/563b662a59afc2b5120000c6

const nbYear = (p0, percent, aug, p) => {
  let years = 0

  while (p0 < p) {
    years++
    p0 = p0 + (p0 * percent) / 100 + aug
  }

  return years
}

nbYear(1500, 5, 100, 5000) // -> 15
nbYear(1500000, 2.5, 10000, 2000000) // -> 10
nbYear(1500000, 0.25, 1000, 2000000) // -> 94
