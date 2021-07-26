// https://www.codewars.com/kata/525f47c79f2f25a4db000025

function validPhoneNumber(phoneNumber) {
  return '(xxx) xxx-xxxx' === phoneNumber.replace(/\d/g, 'x')
}

validPhoneNumber('(123) 456-7890') // -> true
validPhoneNumber('(123) 456-7890') // -> true
validPhoneNumber('(1111)555 2345') // -> false
validPhoneNumber('(098) 123 4567') // -> false
