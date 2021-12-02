const input = require("fs").readFileSync(0, "utf8").toString().split("\n");
const testcase = Number(input[0]);

let answer = "";

for (let i = 1; i <= testcase; i++) {
  let data = input[i].split(" ");
  let a = Number(data[0]);
  let b = Number(data[1]);
  answer += a + b + "\n";
}

console.log(answer);
