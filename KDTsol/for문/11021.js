const input = require("fs").readFileSync(0, "utf8").toString().split("\n");
const testcase = Number(input[0]);

let ans = "";

for (let i = 1; i <= testcase; i++) {
  const data = input[i].split(" ");
  const a = Number(data[0]) + Number(data[1]);
  ans += `Case #${i}: ${a}` + "\n";
}

console.log(ans);
