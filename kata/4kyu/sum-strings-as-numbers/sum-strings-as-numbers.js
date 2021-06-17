// https://www.codewars.com/kata/5324945e2ece5e1f32000370

const sumStrings = (a, b) => {
  return (BigInt(a) + BigInt(b)).toString()
}

sumStrings('1', '2') // -> '3'
sumStrings('123', '456') // -> '579'
sumStrings('712569312664357328695151392', '8100824045303269669937') // -> 712577413488402631964821329
