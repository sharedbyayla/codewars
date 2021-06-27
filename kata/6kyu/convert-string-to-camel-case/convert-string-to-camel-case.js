// https://www.codewars.com/kata/517abf86da9663f1d2000003

const toCamelCase = (str) => {
  return str
    .split(/[^a-z]/gi)
    .map((word, i) => {
      if (i === 0) return word
      return word.slice(0, 1).toUpperCase() + word.slice(1)
    })
    .join('')
}

toCamelCase('') // -> ''
toCamelCase('the_stealth_warrior') // -> "theStealthWarrior"
toCamelCase('The-Stealth-Warrior') // -> "TheStealthWarrior"
toCamelCase('A-B-C') // -> "ABC"
