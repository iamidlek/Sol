const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map((y) => Number(y));

let ans = "";
const data = {};

const arrSet = [...new Set(arr)].sort((a, b) => a - b);

arrSet.forEach((num, idx) => (data[num] = idx));

arr.forEach((num) => {
  ans += `${data[num]} `;
});

console.log(ans);
