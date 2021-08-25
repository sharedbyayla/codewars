# https://www.codewars.com/kata/514b92a657cdc65150000006

def solution(number):
    sum = 0;
    for num in range(number):
        if num % 3 == 0 or num % 5 == 0:
            sum += num
    return sum

solution(10) # ->  23