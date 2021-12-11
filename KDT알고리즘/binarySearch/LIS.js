// 병사 배치하기
let n = 7; // 데이터의 개수(N)
let arr = [15, 11, 4, 8, 5, 2, 4]; // 수열

// 순서를 뒤집어 LIS 문제로 변환
arr.reverse();
// LIS 배열
let d = [0];
// 이진 탐색을 활용한 LIS 알고리즘 수행
for (x of arr) {
  // 마지막 원소보다 현재 원소 x가 크다면 가장 뒤에 넣기
  if (d[d.length - 1] < x) {
    d.push(x);
  }
  // x 이하인 원소가 있다면, 가능한 왼쪽에 있는 원소와 x를 교체
  else {
    let index = lowerBound(d, x, 0, d.length);
    d[index] = x;
  }
}
// 열외해야 하는 병사의 최소 수를 출력
console.log(n - (d.length - 1)); // 2

// [4, 2, 5, 8, 4, 11, 15]
/*
초기 상태 0
i = 0  0  4
i = 1  0  2
i = 2  0  2  5
i = 3  0  2  5  8
i = 4  0  2  4  8
i = 5  0  2  4  8 11 
i = 6  0  2  4  8 11 15
*/
