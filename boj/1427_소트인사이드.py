
## 나의 코드

n = list(map(int,input()))
n.sort(reverse=True)

res = ''
for s in n:
    res += str(s)

print(res)


## 원리 이해

arr = input()

for i in range(9, -1, -1):
  for j in arr:
    # 9가 arr에 있는 만큼 출력 8,7,6.. 동일
    if int(j) == i:
      print(i, end='')
