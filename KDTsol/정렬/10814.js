const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const arr = input.map((item) => item.split(" "));

arr.sort((a, b) => {
  if (Number(a[0]) >= Number(b[0])) {
    return 1;
  }
  return -1;
});

let ans = "";

arr.forEach((res) => {
  ans += `${res[0]} ${res[1]}\n`;
});

console.log(ans);

/*
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

input.shift();

const listFocusAge = new Array(201);
input.map(list => {
  const splited = list.split(' ');
  const age = parseInt(splited[0]);
  if (listFocusAge[age] === undefined) listFocusAge[age] = [];
  listFocusAge[age].push([age, splited[1]]);
});

let results = '';
listFocusAge.map(list => {
  if (list) {
    for (let i = 0; i < list.length; i++) {
      results += `${list[i][0]} ${list[i][1]}\n`;
    }
  }
});
console.log(results);
*/
