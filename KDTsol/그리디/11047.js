const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let target = Number(input.shift().split(" ")[1]);

const arr = input.filter((x) => x < target);
let idx = arr.length - 1;

let ans = 0;

while (target !== 0) {
  if (target >= arr[idx]) {
    target -= arr[idx];
    ans += 1;
  } else {
    idx -= 1;
  }
}

console.log(ans);
