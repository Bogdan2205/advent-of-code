const fs = require("fs");
const allFileContents = fs.readFileSync("data.in", "utf-8");
let count = 0;
let stack = [[], [], [], [], [], [], [], [], []];
// let stack = [[], [], []];
let moves = [];
let to = [];
let from = [];
function moveCrates(arr, x, y, z) {
  for (let i = 0; i < x; i++) {
    let crate = arr[y].pop();
    arr[z].push(crate);
  }
}
allFileContents.split(/\r?\n/).forEach((line) => {
  if (line.length > 0) {
    if (line[0] !== "m") {
      //   values[index/4] = [...line].filter((value, index) => index % 4 === 1);
      for (let i = 1; i < line.length; i += 4) {
        stack[count].unshift(line[i]);
        count++;
      }
    }
    if (line[0] === "m") {
      let move = line.split(" ");
      moves.push(move[1]);
      from.push(move[3]);
      to.push(move[5]);
    }
    count = 0;
  }
});

let parsedStacks = stack.map((value) => {
  value = value.filter((x) => {
    return x !== " ";
  });
  return value;
});
let crates = [];
for (let i = 0; i < moves.length; i++) {
  let j = 0;
  let crates2 = JSON.parse(JSON.stringify(crates));
  while (j < moves[i]) {
    crates2.push(parsedStacks[from[i] - 1].pop());
    j++;
  }
  crates2.reverse();
  for (let j = 0; j < crates2.length; j++) {
    parsedStacks[to[i] - 1].push(crates2[j]);
  }
}
console.log(parsedStacks);
