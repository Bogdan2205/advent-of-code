const fs = require("fs");
const lines = fs
  .readFileSync("data.in", "utf-8")
  .split("\r\n")
  .map((line) => line.split(" "));

const tail = [0, 0];
const head = [0, 0];
for (let i = 0; i < lines.length; i++) {
  if (lines[i][0] === "R") {
    head[0] += parseInt(lines[i][1]);
    if (
      Math.abs(head[0]) - Math.abs(tail[0]) === 1 &&
      Math.abs(head[1]) - Math.abs(tail[1]) === 1
    ) {
      tail[0]++;
      tail[1]++;
    } else if (
      Math.abs(head[0]) - Math.abs(tail[0]) === -1 &&
      Math.abs(head[1]) - Math.abs(tail[1]) === 1
    ) {
      tail[0]--;
      tail[1]++;
    } else if (
      Math.abs(head[0]) - Math.abs(tail[0]) === -1 &&
      Math.abs(head[1]) - Math.abs(tail[1]) === -1
    ) {
      tail[0]--;
      tail[1]--;
    } else if (
      Math.abs(head[0]) - Math.abs(tail[0]) === 1 &&
      Math.abs(head[1]) - Math.abs(tail[1]) === 1
    ) {
      tail[0]++;
      tail[1]--;
    } else if (Math.abs(head[0]) - Math.abs(tail[0] > 1)) {
      while (Math.abs(head[0]) - Math.abs(tail[0]) > 1) tail[0]++;
    }
  }
  if (lines[i][0] === "L") {
    head[0] -= parseInt(lines[i][1]);
    if (
      Math.abs(head[0]) - Math.abs(tail[0]) === 1 &&
      Math.abs(head[1]) - Math.abs(tail[1]) === 1
    ) {
      tail[0]++;
      tail[1]++;
    } else if (
      Math.abs(head[0]) - Math.abs(tail[0]) === -1 &&
      Math.abs(head[1]) - Math.abs(tail[1]) === 1
    ) {
      tail[0]--;
      tail[1]++;
    } else if (
      Math.abs(head[0]) - Math.abs(tail[0]) === -1 &&
      Math.abs(head[1]) - Math.abs(tail[1]) === -1
    ) {
      tail[0]--;
      tail[1]--;
    } else if (
      Math.abs(head[0]) - Math.abs(tail[0]) === 1 &&
      Math.abs(head[1]) - Math.abs(tail[1]) === 1
    ) {
      tail[0]++;
      tail[1]--;
    } else if (Math.abs(head[0]) - Math.abs(tail[0] > 1)) {
      while (Math.abs(head[0]) - Math.abs(tail[0]) > 1) tail[0]--;
    }
    // while (Math.abs(head[0]) - Math.abs(tail[0]) > 1) tail[0]--;
  }
  if (lines[i][0] === "U") {
    head[1] += parseInt(lines[i][1]);
    if (
      Math.abs(head[0]) - Math.abs(tail[0]) === 1 &&
      Math.abs(head[1]) - Math.abs(tail[1]) === 1
    ) {
      tail[0]++;
      tail[1]++;
    } else if (
      Math.abs(head[0]) - Math.abs(tail[0]) === -1 &&
      Math.abs(head[1]) - Math.abs(tail[1]) === 1
    ) {
      tail[0]--;
      tail[1]++;
    } else if (
      Math.abs(head[0]) - Math.abs(tail[0]) === -1 &&
      Math.abs(head[1]) - Math.abs(tail[1]) === -1
    ) {
      tail[0]--;
      tail[1]--;
    } else if (
      Math.abs(head[0]) - Math.abs(tail[0]) === 1 &&
      Math.abs(head[1]) - Math.abs(tail[1]) === 1
    ) {
      tail[0]++;
      tail[1]--;
    } else if (Math.abs(head[1]) - Math.abs(tail[1] > 1)) {
      while (Math.abs(head[1]) - Math.abs(tail[1]) > 1) tail[1]++;
    }
    // while (Math.abs(head[1]) - Math.abs(tail[1]) > 1) tail[1]++;
  }
  if (lines[i][0] === "D") {
    head[1] -= parseInt(lines[i][1]);
    if (
      Math.abs(head[0]) - Math.abs(tail[0]) === 1 &&
      Math.abs(head[1]) - Math.abs(tail[1]) === 1
    ) {
      tail[0]++;
      tail[1]++;
    } else if (
      Math.abs(head[0]) - Math.abs(tail[0]) === -1 &&
      Math.abs(head[1]) - Math.abs(tail[1]) === 1
    ) {
      tail[0]--;
      tail[1]++;
    } else if (
      Math.abs(head[0]) - Math.abs(tail[0]) === -1 &&
      Math.abs(head[1]) - Math.abs(tail[1]) === -1
    ) {
      tail[0]--;
      tail[1]--;
    } else if (
      Math.abs(head[0]) - Math.abs(tail[0]) === 1 &&
      Math.abs(head[1]) - Math.abs(tail[1]) === 1
    ) {
      tail[0]++;
      tail[1]--;
    } else if (Math.abs(head[1]) - Math.abs(tail[1] > 1)) {
      while (Math.abs(head[1]) - Math.abs(tail[1]) > 1) tail[1]--;
    }
    // while (Math.abs(head[1]) - Math.abs(tail[1]) > 1) tail[1]--;
  }
}
console.log(head);
console.log(tail);
