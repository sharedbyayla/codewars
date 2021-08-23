# https://www.codewars.com/kata/58ca658cc0d6401f2700045f

def find_multiples(integer, limit):
	print(list(range(integer, limit + 1, integer)))


find_multiples(5, 25) # -> [5, 10, 15, 20, 25]
find_multiples(1, 2) # -> [1, 2]