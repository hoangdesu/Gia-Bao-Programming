def check_balance(s: str) -> bool:
    open = 0
    close = 0
    question_mark = 0
    correct_pos = True
    
    for c in s:
        if c == '(':
            open += 1
        elif c== ')':
            close += 1
        elif c == '?':
            question_mark += 1


    if open == close:
        # (??)
        if question_mark % 2 == 0:
            return True
        # (?)
        else: 
            return False
    else:
        # (?))
        ...
        
    print(open, close, question_mark)
        
        
        
        
    
    
# # (?)) OK
# # ?? OK
# # )? NOT OK

# # ?) OK
# # (? OK
# # )? NOT OK
# ?( NOT OK

print(check_balance('(?))'))
print(check_balance('()'))
print(check_balance('(??)'))
print(check_balance('??'))



# def is_valid_parentheses_pattern(s):
#     min_open = max_open = 0
#     for char in s:
#         if char == '(':
#             min_open += 1
#             max_open += 1
#         elif char == ')':
#             min_open -= 1
#             max_open -= 1
#         elif char == '?':
#             # Can be '(' -> +1 or ')' -> -1
#             min_open -= 1
#             max_open += 1

#         if max_open < 0:
#             return False
#         min_open = max(min_open, 0)

#     return min_open == 0

# print(is_valid_parentheses_pattern(''))

print(is_valid_parentheses_pattern('(?))'))
print(is_valid_parentheses_pattern('()'))
print(is_valid_parentheses_pattern('(??)'))
print(is_valid_parentheses_pattern('?('))
print(is_valid_parentheses_pattern('?()'))