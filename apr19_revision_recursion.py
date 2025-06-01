# iteration
# counter = 0
# while True:
#     print('hi', counter)
#     counter += 1


# recursive function

# counter = 0

# def hi(counter):
#     print('hi', counter)
#     counter += 1
#     hi(counter)

# hi(counter)


# Function call stack

# print(callable(str))
# str = "a"
# print(callable(str))



# def hello(name):
#     print(f'hello {name}')
    
    
# def main():
#     name = 'Bao'
#     hello(name)


# main()

# def count(start, stop):
#     # base case
#     if start > stop:
#         return
#     print(start)
    
#     # recursive part
#     count(start+1, stop)

    
# count(1, 10)


# HW1:
# recursive_fibonacci(10) -> 34

# 1 2 3 4 5 6 7 8  9  10
# 0 1 1 2 3 5 8 13 21 34

# HW2:
# recursive_prime_number(7) -> True
# recursive_prime_number(8) -> False


# using 1-based indexing
def recursive_fibonacci(i):
    if i <= 1:
        return 0
    if i == 2: 
        return 1
    
    return recursive_fibonacci(i-1) + recursive_fibonacci(i-2)


print(recursive_fibonacci(10)) # 34


for i in range(10):
    print(recursive_fibonacci(i))