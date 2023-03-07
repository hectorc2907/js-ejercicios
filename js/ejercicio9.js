let frase = prompt("Escribe una frase");
let cantidad = frase.length;
let i;
for (i = 0; i < cantidad; i++) {
if (frase.substring(i,1) === "a" || frase.substring(i,1) === "e" || frase.substring(i,1) === "i" || frase.substring(i,1) === "o" || frase.substring(i,1) === "u") {
document.write(frase.substring(i,1))
}
}