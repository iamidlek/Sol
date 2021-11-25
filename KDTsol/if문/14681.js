const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split("\n");

const A = Number(inputData[0]);
const B = Number(inputData[1]);

if (A > 0) {
  if (B > 0) {
    console.log(1);
  } else {
    console.log(4);
  }
} else {
  if (B > 0) {
    console.log(2);
  } else {
    console.log(3);
  }
}
