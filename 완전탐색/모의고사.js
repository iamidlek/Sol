/*
이상하다.. 분명 내 코드도 돌아가는데..
테스트 14개중 6개만 통과 8개가 실패..

통과되는 코드를 확인하니
정말 간결하고 알기 쉽게 풀어져 있었다..
아이디어는 (모듈러 연산이나, 마지막 max값으로 push하는것 등)
큰 차이가 없는데 어떻게 공부해 나아가야 하는걸까..
*/

// 나의 코드

function solution(answers) {
  const ps = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
  const ansLength = answers.length
  const res = []
  const resans = []
  ps.forEach(p => {
      let right = 0
      for (let i = 0; i < ansLength; i++) {
          const index = i % p.length
          if (answers[index] === p[i]) {
              right += 1
          }
      }
      res.push(right)
  })
  const maxValue = Math.max(...res);
  for (let i = 0; i < res.length; i++) {
      if (maxValue === res[i]) {
          resans.push((i+1))
      }
  }
  return resans
}


// 좋은 코드

function solution(answers) { 
  var answer = []; 
  let p1 = [1,2,3,4,5]; 
  let p2 = [2,1,2,3,2,4,2,5]; 
  let p3 = [3,3,1,1,2,2,4,4,5,5]; 
  
  let s1 = answers.filter( (a, i) => a === p1[i%5] ).length; 
  let s2 = answers.filter( (a, i) => a === p2[i%8] ).length; 
  let s3 = answers.filter( (a, i) => a === p3[i%10] ).length; 
  
  let max = Math.max(s1, s2, s3); 
  if(s1 === max) answer.push(1); 
  if(s2 === max) answer.push(2); 
  if(s3 === max) answer.push(3); 
  return answer; 
}
