let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let num = input[0] * 1;

for (let i = 1; i <= num; i++) {
  let score = input[i].split(" ");
  let num2 = score.shift() * 1;
  let count = 0;

  let avg = score.reduce((acc, v) => (acc += v * 1), 0);

  avg /= num2;

  for (let j = 0; j < num2; j++) {
    if (score[j] > avg) {
      count++;
    }
  }

  let result = ((count / num2) * 100).toFixed(3);

  console.log(result + "%");
}
//const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

//const test = Number(input[0])

//for (let i = 1; i <= test; i++) {
//    const data = input[i].split(' ').map(x=>Number(x))
//    const count = data.shift()
//    const average = data.reduce((a.b)=>a+b) / count

//    const ans = data.filter(x=> x > average)
//    console.log(Math.round(ans.length / count).toFixed(3),'%')
//}
