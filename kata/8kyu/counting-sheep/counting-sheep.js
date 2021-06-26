// https://www.codewars.com/kata/54edbc7200b811e956000556

const countSheeps = (arrayOfSheep) => {
  return arrayOfSheep
    .map((val) => (val ? 1 : 0))
    .reduce((total, current) => total + current, 0)
}

countSheeps([
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
]) // -> 17
