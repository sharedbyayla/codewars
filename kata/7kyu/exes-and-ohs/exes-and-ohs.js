// https://www.codewars.com/kata/55908aad6620c066bc00002a

const XO = (str) => {
  const x = str.match(/x/gi) || []
  const o = str.match(/o/gi) || []

  return x.length === o.length
}

XO('xo') // -> true
XO('xxOo') // -> true
XO('xxxm') // -> false
XO('Oo') // -> false
XO('ooom') // -> false
