const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const numArr = input.map((item) => item.split(" ").map((one) => Number(one)));

numArr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

let ans = "";

numArr.forEach((res) => {
  ans += `${res[0]} ${res[1]}\n`;
});

console.log(ans);
