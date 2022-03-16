function solution(answers) {
  const answer = [];

  const supoza1 = score(answers, [1, 2, 3, 4, 5]);
  const supoza2 = score(answers, [2, 1, 2, 3, 2, 4, 2, 5]);
  const supoza3 = score(answers, [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);

  const max = Math.max(supoza1, supoza2, supoza3);
  if (supoza1 === max) answer.push(1);
  if (supoza2 === max) answer.push(2);
  if (supoza3 === max) answer.push(3);
  return answer;
}

function score(answers, pattern) {
  return answers.filter((ans, idx) => ans === pattern[idx % pattern.length])
    .length;
}
