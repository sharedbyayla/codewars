// https://www.codewars.com/kata/52449b062fb80683ec000024

const generateHashtag = (str) => {
  const output = `#${str
    .split(' ')
    .filter((val) => val !== '')
    .map((word) => (word = word[0].toUpperCase() + word.slice(1)))
    .join('')}`
  return output.length > 140 || output.length < 2 ? false : output
}

generateHashtag('') // ->  false
generateHashtag(' '.repeat(200)) // -> false
generateHashtag('Do We have A Hashtag') // -> "#DoWeHaveAHashtag"
generateHashtag('Codewars') // -> "#Codewars"
generateHashtag('Codewars Is Nice') // -> "#CodewarsIsNice"
generateHashtag('Codewars is nice') // -> "#CodewarsIsNice"
generateHashtag('code' + ' '.repeat(140) + 'wars') // -> "#CodeWars"
generateHashtag(
  'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
) // -> false
generateHashtag('a'.repeat(139)) // -> "#A" + "a".repeat(138)
generateHashtag('a'.repeat(140)) // -> false
