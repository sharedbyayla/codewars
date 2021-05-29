// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

const removeSmallest = (arr) => {
	const copy = [...numbers]
	const target = copy.indexOf(Math.min(...copy))
	copy.splice(target, 1)

	return copy
}

removeSmallest([1, 2, 3, 4, 5]) // -> [2,3,4,5]
removeSmallest([5, 3, 2, 1, 4]) // -> [5,3,2,4]
removeSmallest([2, 2, 1, 2, 1]) // -> [2,2,2,1]
