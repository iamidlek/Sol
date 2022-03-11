function solution(arr1, arr2) {
  const ans = arr1;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      ans[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return ans;
}

function solution2(arr1, arr2) {
  return arr1.map((ar1, i) => ar1.map((aitem, j) => aitem + arr2[i][j]));
}
