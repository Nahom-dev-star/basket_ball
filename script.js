let num1 = 0;
let num2 = 0;
document.getElementById("man").innerText = num1;
document.getElementById("man2").innerText = num2;

function btn1() {
  num1 += 1;
  document.getElementById("man").innerText = num1;
}
function btn2() {
  num1 += 2;
  document.getElementById("man").innerText = num1;
}
function btn3() {
  num1 += 3;
  document.getElementById("man").innerText = num1;
}
function btn11() {
  num2 += 1;
  document.getElementById("man2").innerText = num2;
}
function btn22() {
  num2 += 2;
  document.getElementById("man2").innerText = num2;
}
function btn33() {
  num2 += 3;
  document.getElementById("man2").innerText = num2;
}
function new1() {
  num1 = 0;
  document.getElementById("man").innerText = num1;
}
function new2() {
  num2 = 0;
  document.getElementById("man2").innerText = num2;
}
