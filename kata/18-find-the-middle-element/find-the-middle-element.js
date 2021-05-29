// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

const gimme = (inputArray) => {
	const max = Math.max(...inputArray)
	const min = Math.min(...inputArray)

	return inputArray.indexOf(
		inputArray.filter((num) => {
			if (num !== max && num !== min) {
				return num
			}
		})[0]
	)
}

gimme([2, 3, 1]) // -> 0
gimme([5, 10, 14]) // -> 1
