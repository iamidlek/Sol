function solution(phone_number) {
  let ans = "";
  const leng = phone_number.length - 4;
  for (let i = 0; i < phone_number.length; i++) {
    if (i < leng) {
      ans += "*";
    } else {
      ans += phone_number[i];
    }
  }
  return ans;
}

function solution2(phone_number) {
  // (?=x) 는 x에 해당하는 앞의 것을 해당 시킴
  // \d 는 숫자(digit)를 의미
  // {4} 는 앞의 한개의 문자의 반복 개수

  // 즉 숫자 4개 앞에 해당하는 것들을 찾음
  return phone_number.replace(/(?=\d{4})/g, "*");
}
