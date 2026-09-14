import input from "./input.js";

var txt = "Roli rendkívül alacsony, de nagyon.";

console.log(txt.slice(0, 5));
console.log(txt.slice(2, 8));
console.log(txt.slice(5));
console.log(txt.substr(5, 6));
console.log(txt.toUpperCase());
let text = "";
for (let i = 0; i <= txt.length; i++) {
  if (i % 2 == 1) {
    text += txt.charAt(i).toUpperCase();
  } else {
    text += txt[i];
  }
}
console.log(text);
console.log(txt.replaceAll("e", "E"));
let aa = txt.split("e");
console.log(aa);
