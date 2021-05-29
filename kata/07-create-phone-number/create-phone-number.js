// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript/5e80a713479c670023e89457

const createPhoneNumber = (numbers) => {
	let format = '(###) ###-####'
	numbers.forEach((num) => (format = format.replace('#', num)))

	return format
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // -> "(123) 456-7890"
