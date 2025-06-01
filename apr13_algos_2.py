def is_valid_parentheses_pattern(s):
    def dfs(pos, open_count):
        if open_count < 0:
            return False
        if pos == len(s):
            return open_count == 0
        
        char = s[pos]
        if char == '(':
            return dfs(pos + 1, open_count + 1)
        elif char == ')':
            return dfs(pos + 1, open_count - 1)
        elif char == '?':
            # Try both possibilities
            return dfs(pos + 1, open_count + 1) or dfs(pos + 1, open_count - 1)
        return False

    return dfs(0, 0)

# Test cases
test_cases = [
    "(?))",   # OK
    "??",     # OK
    ")?",     # NOT OK
    "?)",     # OK
    "(?",     # OK
    ")?",     # NOT OK
    "?()",    # NOT OK <- now correct
]

for s in test_cases:
    result = "OK" if is_valid_parentheses_pattern(s) else "NOT OK"
    print(f"{s}: {result}")

