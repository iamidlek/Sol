const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

// 가능한 거리의 최소 최대
let start = 1;
let end = arr[n - 1] - arr[0];

let result = 0;
let d = 0; //간격

while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let total = 1;
  let go = arr[0];

  for (let i = 1; i < n; i++) {
    if (arr[i] - go >= mid) {
      total += 1;
      go = arr[i];
    }
  }

  if (total >= m) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);
