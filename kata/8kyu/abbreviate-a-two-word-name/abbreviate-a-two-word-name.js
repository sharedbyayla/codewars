// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

const abbrevName = (name) => {
  return name
    .split(' ')
    .map((name) => name[0].toUpperCase())
    .join('.')
}

abbrevName('Sam Harris') // -> "S.H"
abbrevName('Patrick Feenan') // -> "P.F"
abbrevName('Evan Cole') // -> "E.C"
abbrevName('P Favuzzi') // -> "P.F"
abbrevName('David Mendieta') // -> "D.M"
