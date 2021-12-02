let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = input[0] * 1;
const score = input[1].split(" ");

const max = Math.max(...score);
let sum = 0;

for (let i = 0; i < num; i++) {
  sum += (score[i] / max) * 100;
}

console.log(sum / num);

//const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

//const cate = Number(input[0])
//const score = input[1].split(' ').map(x=>Number(x))

//const max = Math.max(...score)

//for(let i = 0; i <= cate; i++) {
//   if(score[i] !== max) {
//      score[i] = score[i] / max * 100
//      }
//}
//const ans = score.reduce((a,b)=> a+b)

//console.log(ans/score.length)
