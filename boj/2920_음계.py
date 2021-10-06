# 나의 코드
n = list(map(int,input().split()))

m = 0
j = 0
for i in range(1,len(n)):
  if n[i-1] + 1 == n[i]:
    j = 1
  elif n[i-1] -1 == n[i]:
    j = 2
  else:
    m = 1

if m == 1:
  print('mixed')
elif j == 1:
  print('ascending')
else:    
  print('descending')


# 좋은 코드
a = list(map(int, input().split()))

ascending = True
descending = True

for i in range(1,8):
  if a[i] > a[i-1]:
    descending = False
  elif a[i] < a[i-1]:
    ascending = False

if ascending:
  print('ascending')
elif descending:
  print('descending')
else:
  print('mixed')
