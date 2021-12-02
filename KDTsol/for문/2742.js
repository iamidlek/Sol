const input = require("fs").readFileSync(0, "utf8").toString().split("\n");
let testcase = Number(input[0]);

let ans = "";

for (let i = testcase; i >= 1; i -= 1) {
  ans += i + "\n";
}

console.log(ans);
