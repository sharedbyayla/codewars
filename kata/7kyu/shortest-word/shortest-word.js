// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

const findShort = (s) => {
  return Math.min(...s.split(' ').map((x) => (x = x.length)))
}

findShort('bitcoin take over the world maybe who knows perhaps') // -> 3
findShort('turns out random test cases are easier than writing out basic ones') // -> 3
findShort("Let's travel abroad shall we") // -> 2
