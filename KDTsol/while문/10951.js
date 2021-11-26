let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let ans = "";
let i = 0;
while (i < input.length - 1) {
  const data = input[i].split(" ");
  const a = Number(data[0]);
  const b = Number(data[1]);
  ans += a + b + "\n";
  i += 1;
}

console.log(ans);
