const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let m = Number(input[2]);

let min = 1;
// 들어 올 수  또는 가지고 있는 최대값
let max = arr[n - 1];

while (min <= max) {
  const mid = Math.floor((min + max) / 2);

  // 최대 가용 예산과 비교할 sum
  const sum = arr.reduce((acc, v) => acc + (v <= mid ? v : mid), 0);

  // 초과
  if (sum > m) {
    max = mid - 1;
  } else {
    min = mid + 1;
  }
}
console.log(max);
