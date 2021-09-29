/*
some... 생각지도 못 했다
(첫 요소의 값보다 큰 값이 있다면을 조건 그대로 구현 할 수 있다)

shift와 push는 동일하게 생각 할 수 있는 부분이었다

location을 따로 사용하지 않고
ranking++ 를 이용하여 
결과 몇번째 출력되었는지를 count 

while문을 true로 놓고 return으로 빠져나오는 방법을 알게됨
.isMe 로 인덱스와 location을 일치하는 요소에만 true를 줌

결과 높은 우선순위 이면서 false인 값들은
.shift() 되어 없어진다
*/


// 샘플 통과 but 제출 탈락한 코드

function solution(priorities, location) {
  let ans
  const priLoc = priorities.map((pri,loc) => [pri,loc])
  
  let max = Math.max(...priorities)
  const min = Math.min(...priorities)
  while (!(max == min)) {
     if (priLoc[0][0] >= max) {
         const idx = priorities.indexOf(max)
         priorities.splice(idx, 1)
         max = Math.max(...priorities)
     } else {
         const goBack = priLoc.shift()
         priLoc.push(goBack)
     }
  }
  for (let i = 0; i < priLoc.length; i++) {
      if (priLoc[i][1] === location) {
          ans = i
      }
  }
  return ans + 1
}


// 좋은 코드

function solution(priorities, location) {
  let list = priorities.map((element, index) => ({
      isMe: index === location,
      val: element,
  }));

  let ranking = 0;

  while (true) {
      let firstPage = list.shift();
      if (list.some((element) => element.val > firstPage.val)) {
          list.push(firstPage);
      } else {
          ranking++;
          if (firstPage.isMe) return ranking;
      }
  }
}
