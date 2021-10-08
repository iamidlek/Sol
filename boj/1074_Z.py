"""
문제를 이해하는 것도 힘들었다..
재귀적으로 풀것

2x2 까지 가면 끝
(z방향으로 )
더크면 2x2로 나누기(재귀)

X,Y(입력받은 값) 과 같은 경우 
count한 값을 return
"""

"""
세로 X (행 이동)
가로 Y (열 이동)

ex 2, 1, 0

 0  1  4  5
 2  3  6  7
 8  9 12 13
10 11 14 15

1,0 은 2 번이 된다
"""

def sol(n, x, y):
  global result
  if n == 2:
    if x == X and y == Y:
      return print(result)
    
    result += 1
    if x == X and y + 1 == Y:
      return print(result)

    result += 1      
    if x + 1 == X and y == Y:
      return print(result)
    
    result += 1      
    if x + 1 == X and y + 1 == Y:
      return print(result)
    
    result += 1
    return
    
  sol(n / 2, x, y)
  sol(n / 2, x, y + n / 2)
  sol(n / 2, x + n / 2, y)
  sol(n / 2, x + n / 2, y + n / 2)

result = 0
N, X, Y = map(int, input().split())

sol(2 ** N,0,0)


### 정답 코드
N, r, c = map(int, input().split())
cnt = 0

while N > 1:
    size = (2 ** N) // 2
    if r < size and c < size: # 2사분면
        pass
    elif r < size and c >= size: # 1사분면
        cnt += size ** 2
        c -= size
    elif r >= size and c < size: # 3사분면
        cnt += size ** 2 * 2
        r -= size
    elif r >= size and c >= size: # 4사분면
        cnt += size ** 2 * 3
        r -= size
        c -= size
    N -= 1

if r == 0 and c == 0:
    print(cnt)
if r == 0 and c == 1:
    print(cnt + 1)
if r == 1 and c == 0:
    print(cnt + 2)
if r == 1 and c == 1:
    print(cnt + 3)


## 간결한 코드
# https://codingcocoon.tistory.com/151
import sys

result = 0


def z(n, x, y):
    global result
    if x == r and y == c:
        print(int(result))
        exit(0)

    if n == 1:
        result += 1
        return

    if not (x <= r < x + n and y <= c < y + n):
        result += n * n
        return
    z(n / 2, x, y)
    z(n / 2, x, y + n / 2)
    z(n / 2, x + n / 2, y)
    z(n / 2, x + n / 2, y + n / 2)


n, r, c = map(int, sys.stdin.readline().split(' '))
z(2 ** n, 0, 0)
