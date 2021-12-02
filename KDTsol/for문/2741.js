const input = require("fs").readFileSync(0, "utf8").toString().split("\n");
const testcase = Number(input[0]);

let ans = "";

for (let i = 1; i <= testcase; i++) {
  ans += i + "\n";
}

console.log(ans);
