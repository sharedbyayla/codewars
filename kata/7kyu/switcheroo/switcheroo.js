// https://www.codewars.com/kata/57f759bb664021a30300007d

function switcheroo(x) {
  return x.replace(/a/g, 'x').replace(/b/g, 'a').replace(/x/g, 'b')
}

switcheroo('abc') // -> 'bac'
switcheroo('aaabcccbaaa') // -> 'bbbacccabbb')
switcheroo('ccccc') // -> 'ccccc')
