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

const binarySearch = (array, target, start, end) => {
  let mid = -1;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

const solution = function (input) {
  const n = Number(input[0]);
  const A = input[1].split(" ").map(Number);
  const m = Number(input[2]);
  const B = input[3].split(" ").map(Number);
  A.sort((a, b) => a - b);

  let ans = "";
  B.forEach((target, idx) => {
    if (binarySearch(A, target, 0, n - 1) !== -1) {
      ans += idx === m - 1 ? "1" : "1\n";
    } else {
      ans += idx === m - 1 ? "0" : "0\n";
    }
  });
  console.log(ans);
};
