let primerNumero = parseInt(prompt("Ingrese el primer numero"));
let segundoNumero = parseInt(prompt("Ingrese el segundo numero"));
let tercerNumero = parseInt(prompt("Ingrese el tercer numero"));
if(primerNumero>segundoNumero && primerNumero>tercerNumero){
    document.write("El numero " + primerNumero + " es el mayor");
}else if(segundoNumero>primerNumero && segundoNumero>tercerNumero){
    document.write("El numero " + segundoNumero + " es el mayor");
}else if(tercerNumero>primerNumero && tercerNumero>segundoNumero){
    document.write("El numero " + tercerNumero + " es el mayor");
}else{
    document.write("Dos o Mas Numeros Son de Igual Valor");
}