X, N = map(int, input().split())
scores = list(map(int, input().split()))

scores.sort(reverse=True)

ranks = [0] * N

i = 0
while i < N:
    j = i

    while j < N and scores[j] == scores[i]:
        j += 1

    for k in range(i, j):
        ranks[k] = j

    i = j

# 등급 비율
grade_percent = {
    1: 0.10,
    2: 0.34,
    3: 0.66,
    4: 0.90,
    5: 1.00
}

#AI 사용
max_rank = int(N * grade_percent[X])

if max_rank == 0:
    print(0)
else:
    answer = 0

    for i in range(N):
        if ranks[i] <= max_rank:
            answer = scores[i]

    print(answer)