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
  const N = Number(input[0]);
  const K = Number(input[1]);

  // n * n 의 시작과 끝값
  let left = 1;
  let right = N * N;

  let res = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let cnt = 0;

    // 작은 값 = 구하는 값 이하인 개수
    for (let i = 1; i <= N; i++) {
      cnt += Math.min(Math.floor(mid / i), N);
    }

    // 더 뒤의 값을 고른 경우
    // 앞쪽 탐색
    if (cnt >= K) {
      res = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  console.log(res);
}
