const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();

if (inputData > 89) {
  console.log("A");
} else if (inputData > 79) {
  console.log("B");
} else if (inputData > 69) {
  console.log("C");
} else if (inputData > 59) {
  console.log("D");
} else {
  console.log("F");
}
