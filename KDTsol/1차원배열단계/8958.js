const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const test = Number(input[0]);

for (let i = 1; i <= test; i++) {
  const ox = input[i].split("");

  let prev = 0;
  let ans = 0;

  for (let j = 0; j < ox.length; j++) {
    if (ox[j] === "O") {
      prev += 1;
    } else {
      prev = 0;
    }
    ans += prev;
  }
  console.log(ans);
}
