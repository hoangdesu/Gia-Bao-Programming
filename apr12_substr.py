# inp = '3 2 100 abab abb aa ab ba'
# m, n, k, x, y, s1, s2, s3 = map(str, inp.split())



# from itertools import combinations

# def is_subsequence(small, large):
#     it = iter(large)
#     return all(c in it for c in small)

# def solve(n, k, mod, s, t, queries):
#     valid_subs = set()
#     s_len = len(s)
    

#     indices = list(range(s_len))
#     for comb in combinations(indices, k):
#         sub = ''.join(s[i] for i in comb)
#         if sub not in valid_subs and not is_subsequence(sub, t):
#             valid_subs.add(sub)
    

#     sorted_subs = sorted(valid_subs)
#     pos_map = {word: idx for idx, word in enumerate(sorted_subs)}


#     results = []
#     for q in queries:
#         if q in pos_map:
#             results.append(str(pos_map[q] % mod))
#         else:
#             results.append("-1")
#     return results


# n, k, mod = 3, 2, 100
# s = "abab"
# t = "abb"
# queries = ["aa", "ab", "ba"]

# results = solve(n, k, mod, s, t, queries)
# print("\n".join(results))




# pairs = {
#     ')': '(',
#     '}': '{',
#     ']':'['
# }


# stack.pop(pairs.get(')'))

# (?)) OK
# ?? OK
# )? NOT OK

int open
int close
int qm
bool correct_pos

=> open++ close++

if open == close:
    if qm % 2 == 0:
        => balanced
    else:
        not OK
else:
    diff = open - close
    if diff == qm:
        ?)
        (?
        )?
