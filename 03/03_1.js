const fs = require("fs");

const allFileContents = fs.readFileSync("data.in", "utf-8");
let fhalf = "";
let shalf = "";
let values1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};
let v = {
  a: [0, 0],
  b: [0, 0],
  c: [0, 0],
  d: [0, 0],
  e: [0, 0],
  f: [0, 0],
  g: [0, 0],
  h: [0, 0],
  i: [0, 0],
  j: [0, 0],
  k: [0, 0],
  l: [0, 0],
  m: [0, 0],
  n: [0, 0],
  o: [0, 0],
  p: [0, 0],
  q: [0, 0],
  r: [0, 0],
  s: [0, 0],
  t: [0, 0],
  u: [0, 0],
  v: [0, 0],
  w: [0, 0],
  x: [0, 0],
  y: [0, 0],
  z: [0, 0],
  A: [0, 0],
  B: [0, 0],
  C: [0, 0],
  D: [0, 0],
  E: [0, 0],
  F: [0, 0],
  G: [0, 0],
  H: [0, 0],
  I: [0, 0],
  J: [0, 0],
  K: [0, 0],
  L: [0, 0],
  M: [0, 0],
  N: [0, 0],
  O: [0, 0],
  P: [0, 0],
  Q: [0, 0],
  R: [0, 0],
  S: [0, 0],
  T: [0, 0],
  U: [0, 0],
  V: [0, 0],
  W: [0, 0],
  X: [0, 0],
  Y: [0, 0],
  Z: [0, 0],
};

let sum = 0;
allFileContents.split(/\r?\n/).forEach((line) => {
  if (line.length > 0) {
    fhalf = line.slice(0, Math.floor((line.length - 1) / 2));
    shalf = line.slice(Math.floor((line.length - 1) / 2) + 1, line.length);
    for (let i = 0; i < fhalf.length; i++) {
      v[fhalf[i]][0]++;
      v[shalf[i]][1]++;
    }
    for (let x in v) {
      console.log(v[x][0] + " " + v[x][1]);
      if (v[x][0] > 0 && v[x][1] > 0) sum += values1[x];
    }
  }
});

console.log(sum);
