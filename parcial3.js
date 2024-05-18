/*Mandamos a llamar a la funcion*/
function verificarPalindromo() {
    var inputFrase = document.getElementById("frase").value;
    var resultado = palindromo(inputFrase);
    document.getElementById("resultado").textContent = resultado;
}
/*Hacemos el proceso de la funcion*/
function palindromo(cadena) {
    var resultado = "La frase \"" + cadena + "\" \n";
    var cadenaOriginal = cadena.toLowerCase();
    var letrasEspacios = cadenaOriginal.split("");
    var cadenaSinEspacios = "";
    for (i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }
    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();
    var iguales = true;
    for (i in letras) {
        if (letras[i] != letrasReves[i]) {
            iguales = false;
        }
    }
    if (iguales) {
        resultado += "es un palíndromo";
    } else {
        resultado += "no es un palíndromo";
    }
    return resultado;
}
