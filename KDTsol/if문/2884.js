let input = require("fs").readFileSync("dev/stdin").toString().split(" ");

let H = Number(input[0]);
let M = Number(input[1]);

if (M < 45) {
  if (H === 0) {
    console.log(23 + " " + (M + 15));
  } else {
    console.log(H - 1 + " " + (M + 15));
  }
} else {
  console.log(H + " " + (M - 45));
}
