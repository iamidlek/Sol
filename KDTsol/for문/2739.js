const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const data = Number(input[0]);

for (let i = 1; i <= 9; i++) {
  console.log(`${data} * ${i} = ${data * i}`);
}
