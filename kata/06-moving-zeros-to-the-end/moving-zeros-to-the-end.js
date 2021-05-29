// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript/5e7fcf45449b0d002059c1f1

const moveZeros = (arr) => {
	// filter for and store zeros
	const zeros = arr.filter((val) => val === 0)
	// filter out zeros
	arr = arr.filter((val) => val !== 0)
	// push each zero to the end of the array
	zeros.map((zero) => arr.push(zero))

	return arr
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']) // -> [false,1,1,2,1,3,"a",0,0]
