const fs = require("fs");

const lines = fs
  .readFileSync("data.in", "utf-8")
  .replace(/\r\n/g, "")
  .trim()
  .split("\n")
  .map((line) => [...line].map(Number));

function setVisible(y, x, visible) {
  visible.add(y, x);
}
function checkLine2(y, x, dy, dx, map) {
  let visible = 0;
  let maximum = map[y][x];
  while (true) {
    y += dy;
    x += dx;
    if (y < 0 || y >= map.length || x < 0 || x >= map[y].length) {
      break;
    }
    visible++;
    if (map[y][x] >= maximum) {
      break;
    }
  }
  return visible;
}
function part2() {
  let max = 0;
  for (let y = 0; y < lines.length; y++) {
    for (let x = 0; x < lines[y].length; x++) {
      const score =
        checkLine2(y, x, -1, 0, lines) *
        checkLine2(y, x, 1, 0, lines) *
        checkLine2(y, x, 0, 1, lines) *
        checkLine2(y, x, 0, -1, lines);
      if (score > max) max = score;
    }
  }

  console.log(max);
}
