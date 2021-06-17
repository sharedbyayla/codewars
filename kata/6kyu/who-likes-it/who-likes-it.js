// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

const likes = (names) => {
  switch (names.length) {
    case 0:
      return `no one likes this`
      break
    case 1:
      return `${names[0]} likes this`
      break
    case 2:
    case 3:
      const last = names.pop()
      return `${names.join(', ')} and ${last} like this`
      break
    default:
      return `${names.splice(0, 2).join(', ')} and ${
        names.length
      } others like this`
  }
}

likes([]) // -> "no one likes this"
likes(['Peter']) // -> "Peter likes this"
likes(['Jacob', 'Alex']) // -> "Jacob and Alex like this"
likes(['Max', 'John', 'Mark']) // -> "Max, John and Mark like this"
likes(['Alex', 'Jacob', 'Mark', 'Max']) // -> "Alex, Jacob and 2 others like this"
