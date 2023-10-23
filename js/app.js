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

function ejercicio4() {
  var mensajePunto4 = document.getElementById("mensajePunto4");
  var nombreUsuario = prompt("Ingrese El Nombre de Usuario");
  mensajePunto4.textContent = `Hola ${nombreUsuario}`;
}
var punto4 = document.getElementById("btnPunto4");
punto4.addEventListener("click", ejercicio4);

function ejercicio5() {
  var mensajePunto5 = document.getElementById("mensajePunto5");
  var num1 = parseInt(prompt("Ingrese el Valor del Numero 1"));
  var num2 = parseInt(prompt("Ingrese el valor del Numero 2"));
  var suma = num1 + num2;
  mensajePunto5.textContent = `${num1} + ${num2} = ${suma}`;
}
var punto5 = document.getElementById("btnPunto5");
punto5.addEventListener("click", ejercicio5);
