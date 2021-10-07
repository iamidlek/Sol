# Union-Find
"""
부모 테이블
1 2 3 4
놓고 1,4 가 연결되면 1,1
4와 3이 연결되면 1,1

즉 1,4,3이 하나의 집합이 됨을 나타냄
"""

# 내코드 시간초과
case = int(input())

for _ in range(case):
  f = int(input())
  relist = []
  count = 0
  for i in range(f):
    a,b = input().split()
    if a not in relist:
      relist.append(a)
      count += 1
    if b not in relist:
      relist.append(b)
      count += 1
    print(count)


##

def find(x):
    if x == parent[x]:
        return x
    else:
        root_x = find(parent[x])
        parent[x] = root_x
        return parent[x]

# y의 Root 노드가 x의 Root 노드와 같지 않으면 
# y의 Root 노드가 x의 Root 노드의 자식이 되도록 하는 함수
def union(x,y):
    root_x = find(x)
    root_y = find(y)

    if root_x!=root_y:
        parent[root_y] = root_x
        number[root_x] +=number[root_y]

test_cases = int(input())

for _ in range(test_cases):
    parent = dict()
    number = dict()

    f = int(input())

    for _ in range(f):
        x,y = input().split(" ")
        
        if x not in parent:
            parent[x] = x
            number[x] = 1
        if y not in parent:
            parent[y] = y
            number[y] = 1
        
        union (x,y)
        print(number[find(x)])
