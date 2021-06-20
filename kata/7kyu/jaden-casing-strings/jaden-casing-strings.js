// https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((word) => (word = `${word[0].toUpperCase()}${word.substring(1)}`))
    .join(' ')
}

const str = "How can mirrors be real if our eyes aren't real"
str.toJadenCase() // -> "How Can Mirrors Be Real If Our Eyes Aren't Real"
