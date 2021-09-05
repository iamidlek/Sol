// https://programmers.co.kr/learn/courses/30/lessons/77485

// 나의 풀이


function solution(rows, columns, queries) {
  const answer = [];
  // 테이블 만들기
  let table = Array.from(new Array(rows), () =>
    new Array(columns).fill(0)
  );
  let num = 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++){
      table[i][j] = num;
      num += 1;
    }
  }
  // console.log(table)

  // 횟수
  for (let a = 0; a < queries.length; a++) {
    const xs = queries[a][0] - 1;
    const ys = queries[a][1] - 1;
    const xe = queries[a][2] - 1;
    const ye = queries[a][3] - 1;

    // 꺼내기
    const out = [];
    for (let i = ys; i < ye; i++) out.push(table[xs][i]);
    for (let i = xs; i < xe; i++) out.push(table[i][ye]);
    for (let i = ye; i > ys; i--) out.push(table[xe][i]);
    for (let i = xe; i > xs; i--) out.push(table[i][ys]);
    // console.log(out)

    // 가장 작은 값 반환
    answer.push(Math.min(...out));
    
    // console.log(out.pop())
    for (let i = xs; i < xe; i++) table[i][ys] = out.pop();
    for (let i = ys; i < ye; i++) table[xe][i] = out.pop();
    for (let i = xe; i > xs; i--) table[i][ye] = out.pop();
    for (let i = ye; i > ys; i--) table[xs][i] = out.pop();
  }
  return answer
}


// 다른 풀이


function solution(rows, columns, queries) {
    const a = [...Array(rows)].map((_, r)=>[...Array(columns)].map((_, c)=>r*columns+c+1));
    const mins = [];

    queries.map(query => {
        const [x1, y1, x2, y2] = query.map(_=>_-1);
        let min = a[x1][y1], tmp = a[x1][y1];

        for(let i=x1;i<x2;i++) {
            a[i][y1] = a[i+1][y1];
            min = Math.min(min, a[i][y1]);
        }
        for(let i=y1;i<y2;i++) {
            a[x2][i] = a[x2][i+1];
            min = Math.min(min, a[x2][i]);
        }
        for(let i=x2;i>x1;i--) {
            a[i][y2] = a[i-1][y2];
            min = Math.min(min, a[i][y2]);
        }
        for(let i=y2;i>y1;i--) {
            a[x1][i] = a[x1][i-1];
            min = Math.min(min, a[x1][i]);
        }
        a[x1][y1+1] = tmp;

        mins.push(min);
    })

    return mins;
}
