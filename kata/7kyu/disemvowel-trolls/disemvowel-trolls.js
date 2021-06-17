// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

const disemvowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return str
    .split('')
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join('')
}

disemvowel('This website is for losers LOL!') // -> "Ths wbst s fr lsrs LL!"
disemvowel("No offense but,\nYour writing is among the worst I've ever read") // -> "N ffns bt,\nYr wrtng s mngth wrst 'v vr rd")
disemvowel('What are you, a communist?') // -> "Wht r y,  cmmnst?"
