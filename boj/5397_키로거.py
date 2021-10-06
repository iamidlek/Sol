
## 내가 생각한 코드(채점 결과 실패)

times = int(input())

for _ in range(times):
  res = []
  index = 0
  logs = list(input())
  for log in logs:
    if log == '<' and index != 0:
      index -= 1
    elif log == '>' and index < len(res):
      index += 1
    elif log == '-':
      index -= 1
      del res[index]
    else:
      if log != '<' and log != '>' and log != '-':
        res.append(log)
        index += 1
  print(''.join(res))

## 해설

"""
스택 두개를 커서를 사이에 두고 마주 보게 둔다
[ 커서 ]
문자 입력 => 왼쪽 스택에
 - 입력   => 왼쪽 스택 원소 삭제
 < 입력   => 왼쪽에서 오른쪽 스택으로 이동
 > 입력   => 오른쪽 스택에서 왼쪽으로 이동
"""

times = int(input())

for _ in range(times):
  l_stack = []
  r_stack = []
  data = input()
  for i in data:
    if i == '-':
      if l_stack:
        l_stack.pop()
    elif i == '<':
      if l_stack:
        r_stack.append(l_stack.pop())
    elif i == '>':
      if r_stack:
        l_stack.append(r_stack.pop())
    else:
      l_stack.append(i)
  l_stack.extend(reversed(r_stack))
  print(''.join(l_stack))
