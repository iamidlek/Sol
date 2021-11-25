const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

const A = Number(inputData[0]);
const B = Number(inputData[1]);

if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else {
  console.log("==");
}
