let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const userNum = [];

input.forEach((x) => {
  const num = x % 42;

  if (userNum.indexOf(num) === -1) {
    userNum.push(num);
  }
});

console.log(userNum.length);

//const input = let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>Number(x))

//const arr = input.map(x => x % 42)
//const ans = [...new Set(arr)]

//console.log(ans.length)
