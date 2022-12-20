const fs = require("fs");
const lines = fs
  .readFileSync("data.in", "utf-8")
  .split("\r\n")
  .map((line) => line.split(" "));

let arr = [];

for (let i = 0; i < lines.length; i++) {
  if (lines[i][0] === "noop") arr.push(0);
  else if (lines[i][0] === "addx") {
    arr.push(0);
    arr.push(parseInt(lines[i][1]));
  }
}
// console.log(arr);

function getSum(cycle) {
  let x = 1;
  cycle--;
  for (let i = 0; i < cycle; i++) {
    if (arr[i] === 0) {
      x += arr[i];
    } else {
      if (arr[i] !== 0) {
        x += arr[i];
      }
    }
  }
  return x;
}

console.log(
  getSum(20) * 20 +
    getSum(60) * 60 +
    getSum(100) * 100 +
    getSum(140) * 140 +
    getSum(180) * 180 +
    getSum(220) * 220
);
