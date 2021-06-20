// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

const removeChar = (str) => {
  return str.substring(1, str.length - 1)
}

removeChar('eloquent') // -> 'loquen'
removeChar('country') // -> 'ountr'
removeChar('person') // -> 'erso'
removeChar('place') // -> 'lac'
removeChar('ooopsss') // -> 'oopss'
