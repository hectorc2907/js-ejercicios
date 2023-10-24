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
  var num1 = parseInt(prompt("Ingrese el Valor del Numero 1:"));
  var num2 = parseInt(prompt("Ingrese el valor del Numero 2:"));
  var suma = num1 + num2;
  mensajePunto5.textContent = `${num1} + ${num2} = ${suma}`;
}
var punto5 = document.getElementById("btnPunto5");
punto5.addEventListener("click", ejercicio5);

function ejercicio6() {
  var mensajePunto6 = document.getElementById("mensajePunto6");
  var num1 = parseInt(prompt("Ingrese el Valor Del Numero 1:"));
  var num2 = parseInt(prompt("Ingrese el Valor Del Numero 2:"));
  if (num1 > num2) {
    mensajePunto6.textContent = `El primer numero(${num1}) es mayor que el segundo(${num2})`;
  } else if (num2 > num1) {
    mensajePunto6.textContent = `El segundo numero(${num2}) es mayor que el primero(${num1})`;
  } else {
    mensajePunto6.textContent = `Ambos numeros comparten el mismo valor(${num1})`;
  }
}
var punto6 = document.getElementById("btnPunto6");
punto6.addEventListener("click", ejercicio6);

function ejercicio7() {
  var mensajePunto7 = document.getElementById("mensajePunto7");
  var num1 = parseInt(prompt("Ingrese el Valor Del Numero 1:"));
  var num2 = parseInt(prompt("Ingrese el Valor Del Numero 2:"));
  var num3 = parseInt(prompt("Ingrese el Valor Del Numero 3:"));
  if ((num1 > num2 && num1 > num3) || (num1 > num2 && num2 == num3)) {
    mensajePunto7.textContent = `El mayor de los 3 numeros ingresados es el primero(${num1})`;
  } else if ((num2 > num1 && num2 > num3) || (num2 > num1 && num1 == num3)) {
    mensajePunto7.textContent = `El mayor de los 3 numeros ingresados es el segundo(${num2})`;
  } else if ((num3 > num1 && num3 > num2) || (num3 > num1 && num1 == num2)) {
    mensajePunto7.textContent = `El mayor de los 3 numeros ingresados es el tercero(${num3})`;
  }else if(num1 == num2 && num2 == num3 && num1 == num3){
    mensajePunto7.textContent = `Los 3 valores son iguales`;
  }
}
var punto7 = document.getElementById("btnPunto7");
punto7.addEventListener("click", ejercicio7);
