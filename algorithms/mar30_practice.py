# Frequency vs dictionary

# Look-up time in list: O(n)

# Look-up time in dict: O(1)


# paragraph = '''Studio Ghibli, established in 1985 by Hayao Miyazaki, Isao Takahata, and Toshio Suzuki, revolutionized animation with its distinctive visual style. What makes Ghibli's artwork immediately recognizable?'''

# def get_word_frequency(sentence) -> dict:
#     ...
    

# word_frequency = get_word_frequency('hey hello hi hello')

# print(word_frequency) 

# challenge 1: output to an unsorted dictionary
# => output {
#     'hey': 1,
#     'hello': 2,
#     'hi': 1
# }

# challenge 2: return a sorted dict based on the most appeared words
# {
#     'hello': 2,
#     'hey': 1,
#     'hi': 1
# }


def is_valid_isbn(isbn: str) -> bool:
    ...
    
    
is_valid_isbn('978-0-306-40615-7') -> True
is_valid_isbn('978-0-306-40615-9') -> False
is_valid_isbn('9780306406157') -> True

Step 1: support isbn-13

step 2: support isbn-10

is_valid_isbn('0-306-40615-2') -> True
is_valid_isbn('0-306-40615-21') -> False (incorrect format)
