function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return !/\D/g.test(s);
  }
  return false;
}

function solution2(s) {
  return /^\d{4}$|^\d{6}$/.test(s);
}
