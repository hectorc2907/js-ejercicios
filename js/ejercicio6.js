let primerNumero = parseInt(prompt("Ingrese el valor del primer Numero"));
let segundoNumero = parseInt(prompt("Ingrese el valor del segundo Numero"));
if(primerNumero>segundoNumero){
    document.write("El Numero " + primerNumero + " es el mayor");
}else if(segundoNumero>primerNumero){
    document.write("El Numero " + segundoNumero + " es el mayor");
}else{
    document.write("Los Numeros son iguales");
}