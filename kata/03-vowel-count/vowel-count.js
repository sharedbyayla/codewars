// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript/5e471eb997f43f0015dfb387

const getCount = (str) => {
	let vowelsCount = 0
	const vowels = ['a', 'e', 'i', 'o', 'u']

	vowels.forEach((vowel) => {
		vowelsCount += str.split('').filter((letter) => letter === vowel).length
	})

	return vowelsCount
}

getCount('abracadabra') // -> 5
