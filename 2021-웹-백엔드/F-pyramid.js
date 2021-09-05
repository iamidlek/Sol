// https://programmers.co.kr/learn/courses/30/lessons/77486

// 나의 과정
// 못풀어서 포기한 문제 ㅜㅜ

function solution(enroll, referral, seller, amount) {
  
  // 판매 실적 테이블
  const bene = []
  enroll.forEach((name, index) => {
    if (seller.includes(name)){
      bene.push({seller: name, upcost: amount[seller.indexOf(name)] * 10, oripro: amount[seller.indexOf(name)] * 90})
    } else {
      bene.push({seller: name, upcost: 0, oripro: 0})
    }
  })

  // 다단계 구조 만들기
  enroll.forEach( (name, index) => {
    if (referral[index] === "-") {
      bene.forEach( info => {
        if (info.seller === name){
          info.prev = false;
          info.next = []
        }
      })
    } else {
      bene.forEach( info => {
        if (info.seller === name){
          info.prev = referral[index];
          info.next = []
          bene.forEach(addNext => {
            if (addNext.seller === info.prev){
              addNext.next.push(info.seller)
            }
          })
        }
      })
    }
  })
  console.log(bene)

  // depth 
  
  // let depth = 0
  // function rec (obj) {
  //   let d = 0;
  //   if (obj.next.length) {
  //     // console.log(obj.next)
  //     obj.next.forEach( e => {
  //       bene.forEach(s => {
  //         if (s.seller === e){
  //           d += 1
  //           if (depth < d) {
  //             depth = d
  //           }
  //           rec(s)
  //         }
  //       })
  //     })
  //   }
  // }

  // bene.forEach(tagotago => {
  //   rec(tagotago)
  // })
  // console.log(depth)



  // 다단계 이익 전달

  function calc (obj) {
    const list = []
    if (obj.next.length !== 0) {
      obj.next.forEach(d => {
        bene.forEach(n => {
          if (d === n.seller){
            calc(n)
          }
        })
      })
    } else {
      console.log(obj.seller)
    }
  }
  
  // if (obj.next.length) {

  // }
  const answer = []; 

  bene.forEach(people => {
    if (people.prev) {
      console.log(calc(people))
    }
  })
  console.log(answer)

}
  // 결과 도출하기
//   rel.forEach( onebyone => {
//     if (onebyone.next.length === 0) {
//       bene.forEach(n => {
//         if (n.seller === onebyone.name){
//           answer.push(n.oripro)
//         } 
//       })
//     } else {
//       let temp = 0
//       bene.forEach(n => {
//         if (n.seller === onebyone.name){
//           temp += n.oripro
//           onebyone.next.forEach(childe => {
//             bene.forEach(z => {
//               if (z.seller === childe) {
//                 temp += z.upcost
//               }
//             })
//           })
//           answer.push(temp)
//         }
//       })
//     }
//   })
// }

solution(enroll, referral, seller, amount)


//  다른 풀이


function solution(enroll, referral, seller, amount) {
    var answer = [];

    let map = new Map();

    for(let i=0; i<enroll.length; i++){
        map.set(enroll[i], {parents : referral[i], sales: 0 });
    }

    for(let i=0; i<seller.length; i++){
        let num = amount[i] * 100;
        let sell = seller[i];

        while(true){
            let data = map.get(sell);

            let share = parseInt(num / 10);

            map.set(sell, {parents : data.parents, sales : data.sales + num-share});        

            if(data.parents === '-') break;
            if( share === 0) break;
            sell = data.parents;
            num = share;
        }
    }

    for (let [key, value] of map) {
        answer.push(value.sales);
    }

    return answer;
}


// 또 다른 풀이


function solution(enroll, referral, seller, amount) {
    const parent = enroll.reduce((par, name, i) => {
        par[name] = referral[i];
        return par;
    }, {})
    const result = enroll.reduce((res, name) => {
        res[name] = 0;
        return res;
    }, {});
    const go = function(name, benefit){
        if(name === '-' || benefit === 0) return;
        const up = parseInt(benefit / 10, 10);
        result[name] += benefit - up;
        go(parent[name], up);
    }
    seller.forEach((name, i) => {
        go(name, amount[i] * 100);
    })
    return Object.values(result);
}
