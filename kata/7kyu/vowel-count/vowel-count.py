# https://www.codewars.com/kata/54ff3102c1bad923760001f3

def getCount(sentence):
	vowels = ['a', 'e', 'i', 'o', 'u']
	totalVowels = 0
	for letter in sentence:
		if vowels.__contains__(letter):
			totalVowels += 1
	
	return totalVowels


getCount("aeiou") # -> 5
getCount("y") # -> 0
getCount("bcdfghjklmnpqrstvwxz y") # -> 0
getCount("") # -> 0
getCount("abracadabra") # -> 5