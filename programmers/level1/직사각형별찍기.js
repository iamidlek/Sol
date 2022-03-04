process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const [col, row] = data.split(" ");
  let ans = "";
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      ans += "*";
    }
    ans += "\n";
  }
  console.log(ans);
});
