// https://programmers.co.kr/learn/courses/30/lessons/77484

// 나의 풀이

function solution(lottos, win_nums) {
    let ok=0;
    let no=0;
    const table = {6:1,5:2,4:3,3:4,2:5,1:6,0:6}
    lottos.forEach(n => {
      if (win_nums.includes(n)) {
        ok += 1
        no += 1
      } else if (n === 0) {
        ok += 1
      }
    })
    return [table[ok],table[no]]
}


// 다른 풀이

function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}
