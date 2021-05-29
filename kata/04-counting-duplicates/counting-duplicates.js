// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript/5e5c5185de83bf002ed75247

const duplicateCount = (text) => {
	// change text to lowercased array
	text = text.toLowerCase().split('')
	const duplicates = {}
	let count = 0

	// for each letter in the text array, count duplicates
	text.map((letter) => {
		if (duplicates[letter]) duplicates[letter] += 1
		else duplicates[letter] = 1
	})

	// evaluate duplicates for unique values
	Object.keys(duplicates).map((key) => {
		if (duplicates[key] > 1) count += 1
	})

	return count
}

duplicateCount('') // -> 0
duplicateCount('abcde') // -> 0
duplicateCount('aabbcde') // -> 2
duplicateCount('aabBcde') // -> 2
duplicateCount('Indivisibility') // -> 1
duplicateCount('Indivisibilities') // -> 2
