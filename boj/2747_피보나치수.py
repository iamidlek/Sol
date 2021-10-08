"""
느낌적인 느낌은 왔으나 도달하지 못한 문제

해설 코드를 보고 아하 싶었다
재귀 함수 이용에 익숙해져야겠다 
"""

##### ! 작성에 실패한 문제
n = int(input())

def fibo(n):
  
  if n < 3:
    return 0
  if n == 1 or n == 2:
    return 1
  if n == 3:
    return 2
  else:
    return 2 + fibo(n-1)

print(fibo(n))


### 개념을 이해하기 위한 코드 (시간 초과)
## 시간 초과 하는 이유는 재귀가 여러번 불려 지므로(한계점)

def fibonacci(n):
  if n == 0:
    return 0
  if n == 1:
    return 1
    # n = 10 일때 n(=9) 와 n(=8)을 더한 값이 return 되어야 한다
  return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(int(input())))

## 통과 코드

n = int(input())

a,b = 0,1

while n > 0:
  a,b = b, a + b
  n -= 1

# n : 7 일때
# a : 1 1 2 3 5  8 13
# b : 1 2 3 5 8 13 21

print(a)
