// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

const openOrSenior = (data) => {
	data.map((stats, i) => {
		if (stats[0] >= 55 && stats[1] > 7) data[i] = 'Senior'
		else data[i] = 'Open'
	})

	return data
}

openOrSenior([
	[18, 20],
	[45, 2],
	[61, 12],
	[37, 6],
	[21, 21],
	[78, 9],
]) // -> ["Open", "Open", "Senior", "Open", "Open", "Senior"]
