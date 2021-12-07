const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = Number(input.shift());
const arr = input.map((time) => time.split(" ").map(Number));
arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let stack = 0;
let endTime = 0;

arr.forEach(([start, end]) => {
  if (start >= endTime) {
    stack += 1;
    endTime = end;
  }
});

console.log(stack);
