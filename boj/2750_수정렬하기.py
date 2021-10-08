# 선택 정렬 n^2

n = int(input())

arr = []

for _ in range(n):
  arr.append(int(input()))

for i in range(n):
  # 인덱스를 저장
  min_index = i
  # 결국엔 인덱스를 다 돌며
  for j in range(i + 1, n):
    if arr[min_index] > arr[j]:
      min_index = j
  
  # 가장 작은 수가 앞으로
  arr[i], arr[min_index] = arr[min_index], arr[i]

for i in arr:
  print(i)


# 라이브러리 사용 nlogn

n = int(input())

arr = []

for _ in range(n):
  arr.append(int(input()))

arr.sort()

for i in arr:
  print(i)
