function ejercicio1() {
  alert("Un Mensaje");
}
var punto1 = document.getElementById("btnPunto1");
punto1.addEventListener("click", ejercicio1);

function ejercicio2() {
  var mensajePunto2 = document.getElementById("mensajePunto2");
  mensajePunto2.textContent = "Hello World!";
}
var punto2 = document.getElementById("btnPunto2");
punto2.addEventListener("click", ejercicio2);

function ejercicio3() {
  var mensajePunto3 = document.getElementById("mensajePunto3");
  const num1 = 3;
  const num2 = 5;
  var suma = num1 + num2;
  mensajePunto3.textContent = `3 + 5 = ${suma}`;
}
var punto3 = document.getElementById("btnPunto3");
punto3.addEventListener("click", ejercicio3);
