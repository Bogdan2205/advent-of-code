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
let i = data.indexOf(max1);
data[i] = -1;
const max2 = Math.max(...data);

i = data.indexOf(max2);
data[i] = -1;
const max3 = Math.max(...data);

const sum = max1 + max2 + max3;
console.log(sum);
