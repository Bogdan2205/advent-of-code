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
let i = 0;
let x = 1;
let response = "";
while (i < arr.length) {
  if (i % 40 === 0) response += "\r\n";
  if (Math.abs((i % 40) - x) <= 1) response += "#";
  else response += " ";
  x += arr[i];
  i++;
}
console.log(response);
