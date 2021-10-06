# 스택에 대한 이해와
# while 문 사용을 위한 외부의 now(count)를 두는 것이
# 아이디어를 내기 어려운 부분이었다
# (스택과 같을 때만 뽑히게 만드는 부분)

# break 와 같은 종료 함수도 알게 되었다

## 통과 되는 코드

import sys
input = sys.stdin.readline
 
n = int(input())
targets = [int(input()) for _ in range(n)]
 
flag = True
stack, answer, current = [], [], 0
 
for target in targets:
    while True:
        if stack and stack[-1] == target:    # stack: 을 작성한 이유는 맨 처음 stack은 아무것도 없기 때문
            answer.append('-')
            stack.pop()
            break
 
        elif current > target:
            flag = False
 
        else:
            current += 1
            stack.append(current)
            answer.append('+')
 
        if not flag:
            print('NO')
            exit()
 
if flag:
    print('\n'.join(answer))

## 기본 개념

n = int(input())
count = 0
stack = []
result = []
no_message=True

for i in range(0,n):
    x = int(input())

    while count < x:
      count += 1
      stack.append(count)
      result.append("+")

    if stack[-1]==x:
        stack.pop()
        result.append("-")
    else:
        no_message = False
        exit(0) #a clean exit without any errors / problems

if no_message==False:
    print("NO")
else:
    print("\n".join(result))

# 다른 사람의 풀이
import sys
input = sys.stdin.readline
 
n = int(input())
targets = [int(input()) for _ in range(n)]
current = 1
stack, answer = [], []
 
for target in targets:
    while current <= target:
        stack.append(current)
        answer.append('+')
        current += 1
 
    if stack[-1] == target:
        answer.append('-')
        stack.pop()
 
if not stack:
    print('\n'.join(answer))
else:
    print('No')
