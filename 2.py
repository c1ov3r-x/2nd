X, Y = map(int, input().split())
P = int(input())

tiles = []
for _ in range(P):
    A, B, N = map(int, input().split())
    tiles.append((A, B, N))

tiles.sort(key=lambda x: x[0]*x[1], reverse=True) #AI 사용

total_area = X * Y
used = 0

for A, B, N in tiles:
    area = A * B
    
    max_use = min(N, total_area // area)
    
    total_area -= max_use * area
    used += max_use

if total_area == 0:
    print(used)
else:
    print(0)