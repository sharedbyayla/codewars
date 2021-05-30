// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript
const list = (names) => {
	names.map((val, i) => (names[i] = val.name))

	if (names.length > 1) {
		const last = names.pop()
		return `${names.join(', ')} & ${last}`
	}

	return names.join(', ')
}

list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])
// returns 'Bart, Lisa & Maggie'

list([{ name: 'Bart' }, { name: 'Lisa' }])
// returns 'Bart & Lisa'

list([{ name: 'Bart' }])
// returns 'Bart'

list([])
// returns ''
