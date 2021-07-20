// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89

const mouthSize = (animal) => {
  return animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
}

mouthSize('toucan') // -> "wide"
mouthSize('ant bear') // -> "wide"
mouthSize('alligator') // -> "small"
