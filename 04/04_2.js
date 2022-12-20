const fs = require("fs");
const allFileContents = fs.readFileSync("data.in", "utf-8");
let sum = 0;
let linenr = 0;
allFileContents.split(/\r?\n/).forEach((line) => {
  if (line.length > 0) {
    let mid = line.indexOf(",");
    let jum1 = line.slice(0, mid);
    let jum2 = line.slice(mid + 1, line.length);
    let mid2 = jum1.indexOf("-");
    let mid3 = jum2.indexOf("-");
    let a = parseInt(jum1.slice(0, mid2), 10);
    let b = parseInt(jum1.slice(mid2 + 1, jum1.length), 10);
    let c = parseInt(jum2.slice(0, mid3), 10);
    let d = parseInt(jum2.slice(mid3 + 1, jum2.length), 10);
    linenr++;
    // console.log(nr1 + " " + nr2 + " " + nr3 + " " + nr4);

    if (
      (a >= c && a <= d) ||
      (b >= c && b <= d) ||
      (c >= a && c <= b) ||
      (d >= a && d <= b)
    )
      sum++;
  }
});
console.log(sum);
