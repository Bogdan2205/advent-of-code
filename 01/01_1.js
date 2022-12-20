const fs = require("fs");

const allFileContents = fs.readFileSync("data.in", "utf-8");

let data = [];
let index = 0;
allFileContents.split(/\r?\n/).forEach((line) => {
  if (line.length > 0) {
    data[index]
      ? (data[index] += parseInt(line))
      : (data[index] = parseInt(line));
  } else {
    index++;
  }
});
const max1 = Math.max(...data);
console.log(max1);
