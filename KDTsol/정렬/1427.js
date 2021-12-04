const input = require("fs").readFileSync("/dev/stdin").toString().split("");

input.sort((a, b) => b - a);

console.log(input.join(""));
