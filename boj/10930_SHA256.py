# sha-256 해쉬 사용 문법을 알면 되는 문제

import hashlib

n = input()
encoding = n.encode()
res = hashlib.sha256(encoding).hexdigest()
print(res)
