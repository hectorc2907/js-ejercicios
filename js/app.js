function ejercicio1(){
    alert('Un Mensaje');
}
var punto1 = document.getElementById('btnPunto1');
punto1.addEventListener('click',ejercicio1);

function ejercicio2(){
    var mensajePunto2 = document.getElementById('mensajePunto2');
    mensajePunto2.textContent = "Hello World!"
}
var punto2 = document.getElementById('btnPunto2');
punto2.addEventListener('click', ejercicio2);