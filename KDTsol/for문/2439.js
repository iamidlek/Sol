const input = require("fs").readFileSync(0, "utf8").toString().split("\n");
const testcase = Number(input[0]);

let ans = "";

for (let i = testcase; i >= 1; i--) {
  let line = "";
  for (let j = 1; j <= testcase; j++) {
    if (i <= j) {
      line += "*";
    } else {
      line += " ";
    }
  }
  ans += line + "\n";
}

console.log(ans);
