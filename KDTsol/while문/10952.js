const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let ans = "";
let i = 0;
while (true) {
  const data = input[i].split(" ");
  if (data[0] !== "0" && data[1] !== "0") {
    const a = Number(data[0]);
    const b = Number(data[1]);
    ans += a + b + "\n";
    i += 1;
  } else {
    break;
  }
}

console.log(ans);
