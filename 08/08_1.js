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

function checkLine(y, x, dy, dx, map, visible) {
  setVisible(y, x, visible);
  let maximum = map[y][x];
  while (true) {
    y += dy;
    x += dx;
    if (y < 0 || y >= map.length || x < 0 || x >= map[y].length) {
      break;
    }
    if (map[y][x] > maximum) {
      maximum = map[y][x];
      setVisible(y, x, visible);
    }
  }
}

function part1() {
  const visible = new Set();
  for (let i = 0; i < lines[0].length; i++) {
    checkLine(0, i, 1, 0, lines, visible);
    checkLine(lines.length - 1, i, -1, 0, lines, visible);
  }
  for (let i = 0; i < lines.length; i++) {
    checkLine(i, 0, 0, 1, lines, visible);
    checkLine(i, lines[0].length - 1, 0, -1, lines, visible);
  }

  console.log(visible.size);
}
