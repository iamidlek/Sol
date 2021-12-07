const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

let ans = 0;
let acc = 0;

for (let i = 0; i < num; i++) {
  acc += arr[i];
  ans += acc;
}

console.log(ans);
