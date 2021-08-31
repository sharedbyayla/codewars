# https://www.codewars.com/kata/5715eaedb436cf5606000381

def positive_sum(arr):
	print(sum(item in arr if item % 2 == 0))
	return arr


positive_sum([1,2,3,4,5]) # -> 15
positive_sum([1,-2,3,4,5]) # -> 13
positive_sum([-1,2,3,4,-5]) # -> 9
positive_sum([]) # -> 0
positive_sum([-1,-2,-3,-4,-5]) # -> 0