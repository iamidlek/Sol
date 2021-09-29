/* memo
 1. 각 프로세스별 남은 일자를 구한다
 2. 남은 일자 배열로 돌리면서 인덱스로 구분
 3. 인덱스에 기능 수 더하는 방식으로 집약

 for 문으로 처리하는게 따로 인덱스를 두지 않아도 되어서 좋은 것 같다
*/


// 나의 답
function solution(progresses, speeds) {
  const needDay = progresses.map( (progress,i) => {
      return Math.ceil((100 - progress) / speeds[i])
  })
  const ans = []
  let index = -1
  let comp = 0
  
  needDay.forEach( day => {
      if (comp < day) {
          index += 1
          ans[index] = 1
          comp = day
      } else {
          ans[index] += 1
      }
  })
  return ans
}


// 좋은 답
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let maxDay = days[0];

  for(let i = 0, j = 0; i< days.length; i++){
      if(days[i] <= maxDay) {
          answer[j] += 1;
      } else {
          maxDay = days[i];
          answer[++j] = 1;
      }
  }

  return answer;
}
