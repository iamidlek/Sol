# 파이썬에는 다른 문법이 많은 것 같다
"""
인쇄 요청 순서를 인덱스로 만들어 자리를 이동해도
해당 인쇄가 몇 번째로 인쇄 되어지는지 알 수 있다
"""

allc = int(input())

for _ in range(allc):
    n,m = list(map(int, input().split('')))
    queue = list(map(int,input().split('')))
    queue = [(i,idx) for idx, i in enumerate(queue)]
    
    count = 0
    while True:
        if queue[0][0] == max(queue, key=lambda x: x[0])[0]:
            count += 1
            if queue[0][1] == m:
                print(count)
                break
            else:
                queue.pop(0)
        else:
            queue.append(queue.pop(0))
