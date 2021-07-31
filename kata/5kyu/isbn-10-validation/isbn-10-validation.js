// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001

function validISBN10(isbn) {
  const patternCheck = /^\d{9}(\d|X)$/.test(isbn)

  if (patternCheck) {
    return (
      isbn
        .split('')
        .map((num, i) => (num === 'X' ? (num = 10 * (i + 1)) : (num *= i + 1)))
        .reduce((total, current) => total + current) %
        11 ===
      0
    )
  }

  return false
}

validISBN10('1112223339') // -> true
validISBN10('048665088X') // -> true
validISBN10('1293000000') // -> true
validISBN10('1234554321') // -> true
validISBN10('1234512345') // -> false
validISBN10('1293') // -> false
validISBN10('X123456788') // -> false
validISBN10('ABCDEFGHIJ') // -> false
validISBN10('XXXXXXXXXX') // -> false
validISBN10('048665088XZ') // -> false
