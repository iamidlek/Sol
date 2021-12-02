const input = require("fs").readFileSync(0, "utf8").toString().split("\n");
const n = Number(input[0]);

let ans = 0;

for (let i = 1; i <= n; i++) {
  ans += i;
}

console.log(ans);
