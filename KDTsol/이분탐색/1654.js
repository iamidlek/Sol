const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const [n, m] = input[0].split(" ");
  const arr = input.slice(1);

  let start = 0;
  let end = Math.max(...arr);

  let result = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for (x of arr) {
      total += parseInt(x / mid);
    }
    if (total < m) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }
  console.log(result);
}
