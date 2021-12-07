const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
let input = [];
let answer = 0;
rl.on("line", (line) => input.push(line)).on("close", () => {
  const groups = input[0].split("-");
  let answer = 0;
  for (let i = 0; i < groups.length; i++) {
    const cur = groups[i]
      .split("+")
      .map(Number)
      .reduce((a, b) => a + b);
    if (i === 0) {
      answer += cur;
    } else {
      answer -= cur;
    }
  }
  console.log(answer);
});
