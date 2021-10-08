
# 나의 코드 메모리 초과;;
n = int(input())

arr = []

for _ in range(n):
  arr.append(int(input()))

arr.sort()

for i in arr:
  print(i)

# 계수 정렬Counting sort(수의 범위가 제한적일 경우)

import sys

n = int(sys.stdin.readline())

arr = [0] * 10001

for i in range(n):
  data = int(sys.stdin.readline())
  arr[data] += 1

for i in range(10001):
  if arr[i] != 0:
    for j in range(arr[i]):
      print(i) 
    