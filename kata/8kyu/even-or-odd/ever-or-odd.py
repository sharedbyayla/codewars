# https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

def even_or_odd(number):
	if number / 2 == number // 2:
		return 'Even'
	else:
		return 'Odd'


even_or_odd(2) # "Even"
even_or_odd(1) # "Odd"
even_or_odd(0) # "Even"
even_or_odd(1545452) # "Even"
even_or_odd(7) # "Odd"
even_or_odd(78) # "Even"
even_or_odd(17) # "Odd"
even_or_odd(74156741) # "Odd"
even_or_odd(100000) # "Even"
even_or_odd(-123) # "Odd"
even_or_odd(-456) # "Even"