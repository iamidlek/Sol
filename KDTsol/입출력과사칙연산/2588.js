const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const A = Number(inputData[0]);
const B = inputData[1];

const arr = B.split("");
const one = Number(arr[2]);
const ten = Number(arr[1]);
const hund = Number(arr[0]);

console.log(A * one);
console.log(A * ten);
console.log(A * hund);
console.log(A * B);
