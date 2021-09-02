// https://www.codewars.com/kata/50654ddff44f800200000004
#include <stdio.h>

int multiply(int a, int b) 
{
	printf("%i\n", a * b);
	return a * b;
}

int main(void)
{
	multiply(5, 6); // ->  30
	multiply(12, 12); // ->  144
}

