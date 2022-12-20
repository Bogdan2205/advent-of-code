const fs = require("fs");
const line = fs.readFileSync("data.in", "utf-8");
let unique = [];
function isUnique(arr) {
  let arr2 = new Set(arr);
  if (arr2.size === 14) return true;
  else return false;
}
for (let i = 0; i < line.length; i++) {
  unique.push(line[i]);
  if (unique.length > 14) {
    unique.shift();
  }
  if (unique.length === 14 && isUnique(unique)) {
    console.log(i + 1);
    break;
  }
}
