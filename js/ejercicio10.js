let numero = parseInt(prompt("Ingrese un numero"));
if(numero%2==0 || numero%3==0 || numero%5==0 || numero%7==0){
    document.write("El numero ingresado es divisible en alguno de los siguientes numeros: 2, 3, 5 o 7")
}else{
    document.write("El numero ingresado NO es divisible en ninguno de los siguientes numeros: 2, 3, 5 o 7")
}