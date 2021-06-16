// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

const zero = (input) => (input ? parseInt(eval(`0 ${input}`)) : `0`)
const one = (input) => (input ? parseInt(eval(`1 ${input}`)) : `1`)
const two = (input) => (input ? parseInt(eval(`2 ${input}`)) : `2`)
const three = (input) => (input ? parseInt(eval(`3 ${input}`)) : `3`)
const four = (input) => (input ? parseInt(eval(`4 ${input}`)) : `4`)
const five = (input) => (input ? parseInt(eval(`5 ${input}`)) : `5`)
const six = (input) => (input ? parseInt(eval(`6 ${input}`)) : `6`)
const seven = (input) => (input ? parseInt(eval(`7 ${input}`)) : `7`)
const eight = (input) => (input ? parseInt(eval(`8 ${input}`)) : `8`)
const nine = (input) => (input ? parseInt(eval(`9 ${input}`)) : `9`)

const plus = (input) => `+ ${input}`
const minus = (input) => `- ${input}`
const times = (input) => `* ${input}`
const dividedBy = (input) => `/ ${input}`

seven(times(five())) // -> 35
four(plus(nine())) // -> 13
eight(minus(three())) // ->  5
six(dividedBy(two())) // -> 3
