// 메모리 초과

const line = require("fs").readFileSync("/dev/stdin", "utf8");

let [firstLine, ...data] = line
  .trim()
  .split("\n")
  .map((v) => Number(v));

const obj = data.reduce((a, b) => {
  if (!a[b]) {
    a[b] = 0;
  }
  a[b]++;
  return a;
}, {});

for (let [key, value] of Object.entries(obj)) {
  for (let i = 1; i <= value; i++) {
    console.log(key);
  }
}

// 파이썬
```py
import sys
n = int(sys.stdin.readline())

arr = [0] * 10001

for i in range(n):
  data = int(sys.stdin.readline())
  arr[data] += 1

for i in range(10001):
  # 카운트 된 인덱스(=input값)라면
  if arr[i] != 0:
    for j in range(arr[i]):
      # 카운트 된 만큼 출력
      print(i)
```;

/*
const rl = require("readline").createInterface(process.stdin, process.stdout);
let m = 1;
let cnt = new Array(10001);

rl.on("line", (n) => {
  if (m) return m--;
  n = Number(n);
  cnt[n] == undefined ? (cnt[n] = 1) : cnt[n]++;
}).on("close", () => {
  for (let i = 1; i < cnt.length; i++) {
    for (let j = 0; j < cnt[i]; j++) {
      console.log(i);
    }
  }
});
*/
