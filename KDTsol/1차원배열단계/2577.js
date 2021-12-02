const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => Number(x));

const main = `${input[0] * input[1] * input[2]}`.split("");

const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

main.forEach((str) => {
  arr[str] += 1;
});

console.log(arr.join("\n"));
