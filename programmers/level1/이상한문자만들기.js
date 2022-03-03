function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, idx) => {
          if (idx % 2) {
            return char.toLowerCase();
          }
          return char.toUpperCase();
        })
        .join("")
    )
    .join(" ");
}
