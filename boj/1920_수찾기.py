"""
기준이 되는 list를 
set으로 받는 코드로 변경 하면 통과

이유는?..
아마 set을 통해 중복이 줄어 들고
그로 인해 전체 시간이 줄어드는 원리인듯 하다..
"""

# 내 코드 시간 초과
i = int(input())
std = list(map(int,input().split()))
j = int(input())
cp = list(map(int,input().split()))

for c in cp:
  if c in std:
    print('1')
  else:
    print('0')

# 통과 코드
i = int(input())
std = set(map(int,input().split()))
j = int(input())
cp = list(map(int,input().split()))

for c in cp:
  if c in std:
    print('1')
  else:
    print('0')
