// https://www.codewars.com/kata/529b418d533b76924600085d

const toUnderscore = (string) => {
  string = String(string)
  const targets = string.match(/[a-z0-9][A-Z]/g)

  if (!targets) return string

  targets.forEach((pair) => {
    string = string.replace(pair, pair.split('').join('_'))
  })

  return string.toLowerCase()
}

toUnderscore('TestController') // -> "test_controller"
toUnderscore('MoviesAndBooks') // -> "movies_and_books"
toUnderscore('App7Test') // -> "app7_test"
toUnderscore(1) // -> "1"

// Custom Codewars Tests
// Test.assertEquals(toUnderscore('TestController'), 'test_controller')
// Test.assertEquals(toUnderscore('MoviesAndBooks'), 'movies_and_books')
// Test.assertEquals(toUnderscore('App7Test'), 'app7_test')
// Test.assertEquals(toUnderscore(1), '1')
