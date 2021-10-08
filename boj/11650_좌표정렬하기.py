n = int(input())

arr = []

for _ in range(n):
  x,y = map(int,input().split())
  arr.append((x,y))

## 라이브러리 특성상 자동으로 x가 같으면
## y도 비교 후 오름 차순으로 정렬 하는 설정
arr = sorted(arr)

for i in arr:
  print(i[0], i[1])
