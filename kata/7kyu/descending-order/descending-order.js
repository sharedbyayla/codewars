// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

const descendingOrder = (n) => {
  return parseInt(n.toString().split('').sort().reverse().join(''))
}

descendingOrder(42145) // -> 54421
descendingOrder(145263) // -> 654321
descendingOrder(123456789) // -> 987654321
