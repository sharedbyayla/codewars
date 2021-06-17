// https://www.codewars.com/kata/51f2b4448cadf20ed0000386
const removeUrlAnchor = (str) => str.split('#')[0]

removeUrlAnchor('www.codewars.com#about') // -> 'www.codewars.com'
removeUrlAnchor('www.codewars.com?page=1') // -> 'www.codewars.com?page=1'
