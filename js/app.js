function ejercicio1() {
  alert("Un Mensaje");
}
let punto1 = document.getElementById("btnPunto1");
punto1.addEventListener("click", ejercicio1);

function ejercicio2() {
  let mensajePunto2 = document.getElementById("mensajePunto2");
  mensajePunto2.textContent = "Hello World!";
}
let punto2 = document.getElementById("btnPunto2");
punto2.addEventListener("click", ejercicio2);

function ejercicio3() {
  let mensajePunto3 = document.getElementById("mensajePunto3");
  const num1 = 3;
  const num2 = 5;
  let suma = num1 + num2;
  mensajePunto3.textContent = `3 + 5 = ${suma}`;
}
let punto3 = document.getElementById("btnPunto3");
punto3.addEventListener("click", ejercicio3);

function ejercicio4() {
  let mensajePunto4 = document.getElementById("mensajePunto4");
  let nombreUsuario = prompt("Ingrese El Nombre de Usuario");
  mensajePunto4.textContent = `Hola ${nombreUsuario}`;
}
let punto4 = document.getElementById("btnPunto4");
punto4.addEventListener("click", ejercicio4);

function ejercicio5() {
  let mensajePunto5 = document.getElementById("mensajePunto5");
  let num1 = parseInt(prompt("Ingrese el Valor del Numero 1:"));
  let num2 = parseInt(prompt("Ingrese el valor del Numero 2:"));
  let suma = num1 + num2;
  mensajePunto5.textContent = `${num1} + ${num2} = ${suma}`;
}
let punto5 = document.getElementById("btnPunto5");
punto5.addEventListener("click", ejercicio5);

function ejercicio6() {
  let mensajePunto6 = document.getElementById("mensajePunto6");
  let num1 = parseInt(prompt("Ingrese el Valor Del Numero 1:"));
  let num2 = parseInt(prompt("Ingrese el Valor Del Numero 2:"));
  if (num1 > num2) {
    mensajePunto6.textContent = `El primer numero(${num1}) es mayor que el segundo(${num2})`;
  } else if (num2 > num1) {
    mensajePunto6.textContent = `El segundo numero(${num2}) es mayor que el primero(${num1})`;
  } else {
    mensajePunto6.textContent = `Ambos numeros comparten el mismo valor(${num1})`;
  }
}
let punto6 = document.getElementById("btnPunto6");
punto6.addEventListener("click", ejercicio6);

function ejercicio7() {
  let mensajePunto7 = document.getElementById("mensajePunto7");
  let num1 = parseInt(prompt("Ingrese el Valor Del Numero 1:"));
  let num2 = parseInt(prompt("Ingrese el Valor Del Numero 2:"));
  let num3 = parseInt(prompt("Ingrese el Valor Del Numero 3:"));
  if ((num1 > num2 && num1 > num3) || (num1 > num2 && num2 == num3)) {
    mensajePunto7.textContent = `El mayor de los 3 numeros ingresados es el primero(${num1})`;
  } else if ((num2 > num1 && num2 > num3) || (num2 > num1 && num1 == num3)) {
    mensajePunto7.textContent = `El mayor de los 3 numeros ingresados es el segundo(${num2})`;
  } else if ((num3 > num1 && num3 > num2) || (num3 > num1 && num1 == num2)) {
    mensajePunto7.textContent = `El mayor de los 3 numeros ingresados es el tercero(${num3})`;
  } else if (num1 == num2 && num2 == num3 && num1 == num3) {
    mensajePunto7.textContent = `Los 3 valores son iguales`;
  }
}
let punto7 = document.getElementById("btnPunto7");
punto7.addEventListener("click", ejercicio7);

function ejercicio8() {
  let mensajePunto8 = document.getElementById("mensajePunto8");
  let num = parseInt(prompt("Ingrese el valor del Numero:"));
  if (num % 2 === 0) {
    mensajePunto8.textContent = `El numero ${num} es divisible en 2`;
  } else {
    mensajePunto8.textContent = `El numero ${num} no es divisible en 2`;
  }
}
let punto8 = document.getElementById("btnPunto8");
punto8.addEventListener("click", ejercicio8);

function ejercicio9() {
  let mensajePunto9 = document.getElementById("mensajePunto9");
  let frase = prompt("Ingrese la frase");
  function vocales(letra) {
    return "aeiouAEIOU".includes(letra);
  }
  let vocalesEncontradas = "";
  for (let i = 0; i < frase.length; i++) {
    const letra = frase.charAt(i);
    if (vocales(letra)) {
      vocalesEncontradas += letra;
    }
  }
  mensajePunto9.textContent = `${vocalesEncontradas}`;
}
let punto9 = document.getElementById("btnPunto9");
punto9.addEventListener("click", ejercicio9);

function ejercicio10() {
  let mensajePunto10 = document.getElementById("mensajePunto10");
  let num = parseInt(prompt("Ingrese el numero:"));
  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    mensajePunto10.textContent = `El numero ${num} es divisible por lo menos en uno de los numeros solicitados`;
  } else {
    mensajePunto10.textContent = `Èl numero ${num} no es divisible por ninguno de los numeros solicitados`;
  }
}
let punto10 = document.getElementById("btnPunto10");
punto10.addEventListener("click", ejercicio10);
