const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((y) => Number(y));

input.shift();

const length = input.length;

const avg = Math.round(input.reduce((a, b) => a + b) / length);

input.sort((a, b) => a - b);
const middle = input[Math.floor(length / 2)];
const range = input[length - 1] - input[0];

const many = Object.entries(
  input.reduce((a, b) => {
    if (!a[b]) {
      a[b] = 0;
    }
    a[b]++;
    return a;
  }, {})
);

let max = 0;

many.forEach((y) => {
  if (y[1] > max) {
    max = y[1];
  }
});

const checked = many
  .filter((y) => y[1] === max)
  .map((i) => [Number(i[0]), i[1]])
  .sort((a, b) => a[0] - b[0]);

let frequency;

if (checked.length === 1) {
  frequency = checked[0][0];
} else {
  frequency = checked[1][0];
}

console.log(avg);
console.log(middle);
console.log(frequency);
console.log(range);
