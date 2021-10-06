# 완전 탐색

n,m = map(int,input().split())
z = list(map(int,input().split()))

res = 0
length = len(z)

for i in range(0, length):
  for j in range(i+1, length):
    for k in range(j+1, length):
        val = z[i] + z[j] + z[k]
        if val <= m:
          # a,b 중 큰수를 반환
            res = max(res,val)
print(res)


# n이 5일 때 3중 반복문의 결과는?
"""
i j k
0 1 2
0 1 3
0 1 4
0 2 3
0 2 4
0 3 4
1 2 3
1 2 4
1 3 4
2 3 4

모든 경우의 수
"""
