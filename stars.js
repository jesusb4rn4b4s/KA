import input from "./input.js";

let a = "* ";
let aa = a.repeat(5);
console.log("Első Feladat: ");
for (let i = 0; i < 6; i++) {
  console.log(a.repeat(i));
}

console.log("Második Feladat: ");
for (let i = 1; i <= 5; i++) {
  console.log(a.repeat(i).padStart(10, " "));
}

console.log("Harmadik Feladat: ");
for (let i = 1; i <= 5; i++) {
  console.log(" ".repeat(5 - i) + a.repeat(i));
}

console.log("Negyedik Feladat: ");
for (let i = 5; i > 0; i--) {
  console.log(a.repeat(i));
}

console.log("Ötödik Feladat: ");
for (let i = 5; i > 0; i--) {
  console.log(a.repeat(i).padStart(10, " "));
}
