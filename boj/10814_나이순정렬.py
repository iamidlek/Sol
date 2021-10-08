"""
파이썬의 sort 라이브러리 사용하면
.sort()
sorted()

sorted(arr, key= lambda x: x[0])
기존 배열의 순서를 지키면서
오름 차순으로 정렬이 되는 특징이 있다
"""

## 좋은 코드

n = int(input())

arr = []

for _ in range(n):
  data = input().split(' ')
  arr.append((int(data[0]), data[1]))

arr = sorted(arr, key= lambda x: x[0])

for i in arr:
  print(i[0], i[1])
