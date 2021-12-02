const input = require("fs").readFileSync(0, "utf8").toString().split("\n");
const command = input[0].split(" ");

const cases = Number(command[0]);
const x = Number(command[1]);

const list = input[1].split(" ");

const ans = list.filter((item) => Number(item) < x);

console.log(ans.join(" "));
