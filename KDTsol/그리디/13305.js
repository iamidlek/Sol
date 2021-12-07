// 서브테스크 17점
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const distance = input[1].split(" ").map(Number);
let allDistance = distance.reduce((a, b) => a + b);
const price = input[2].split(" ").map(Number);
price.pop();

const minPrice = Math.min(...price);

let ans = 0;

for (let i = 0; i < num - 1; i++) {
  if (price[i] !== minPrice) {
    ans += distance[i] * price[i];
    allDistance -= distance[i];
  } else {
    ans += allDistance * price[i];
    break;
  }
}

console.log(ans);

// 서브태스크 100점

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const dist = input[1].split(" ").map(Number);
const cost = input[2].split(" ").map(Number);
let minCost = cost[0];
for (let i = 0; i < n; i++) {
  minCost = Math.min(minCost, cost[i]);
  cost[i] = minCost;
}
let answer = BigInt(0);
for (let i = 0; i < n - 1; i++) {
  answer += BigInt(dist[i]) * BigInt(cost[i]);
}
console.log(String(answer));
