const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [x, y] = input[0].split(" ").map(Number);

let left = 0;
let right = x;

// y 초기 승리 x 전체 게임
let z = Math.floor((y * 100) / x);

let ans = 0;

while (left <= right) {
  // 실제 더해줄 승리한 횟수
  let mid = Math.floor((left + right) / 2);

  let allGame = x + mid;
  let win = y + mid;
  let avg = Math.floor((win * 100) / allGame);

  // 확률이 같아지면
  if (z === avg) {
    left = mid + 1;
  } else {
    ans = mid;
    right = mid - 1;
  }
}

x = x + ans;
y = y + ans;
let res = Math.floor((y * 100) / x);

if (res == z) {
  console.log(-1);
} else {
  console.log(ans);
}
