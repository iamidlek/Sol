const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();

const arr = [...new Set(input)];
arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
// if return 0 => mean equal

// function compare(a,b) {
//   for(let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       return 1
//     } else {
//       return -1
//     }
//   }
// }

console.log(arr.join("\n"));
