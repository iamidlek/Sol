// 	lowerBound(a, x)
//    정렬된 순서를 유지하면서 배열 a에 x를 삽입할 가장 왼쪽 인덱스를 반환

// 	upperBound(a, x)
//    정렬된 순서를 유지하면서 배열 a에 x를 삽입할 가장 오른쪽 인덱스를 반환

arr = [1, 2, 4, 4, 8];
x = 4;

console.log(lowerBound(arr, x, 0, arr.length)); // 2
/*
mid = (0 + 5) / 2 = 2 (int만)

end = mid

mid = (0 + 2) / 2 = 1

2 >= 4     =>   start = mid + 1
*/
console.log(upperBound(arr, x, 0, arr.length)); // 4

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    // 최대한 왼쪽으로 이동하기
    else start = mid + 1;
  }
  return end;
}

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1; // 최대한 오른쪽으로 이동하기
  }
  return end;
}
