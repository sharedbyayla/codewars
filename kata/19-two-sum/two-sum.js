// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

const twoSum = (numbers, target) => {
	let output

	numbers.forEach((num, i) => {
		if (numbers.includes(target - num)) {
			output = [numbers.indexOf(target - num), i]
		}
	})

	return output
}

twoSum([1, 2, 3], 4) // -> [0, 2]
twoSum([1234, 5678, 9012], 14690) // -> [1, 2]
twoSum([2, 2, 3], 4) // ->[0, 1]
