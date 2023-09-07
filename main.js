
function calcularFactorial() {
    const numberFactorial = document.getElementById("factorial");

    const resultado = document.getElementById("respuesta1");
    const num = parseInt(numberFactorial.value); 

    if (isNaN(num) || num <0) {
        resultado.textContent= "Ingresa un nummero valido 0 igual a 0"
        return;
     }

    if (num === 0 ||num === 1  ) { 
      resultado.textContent= "  El factorial de " + num + " es 1 "; 
      return; 
    }
    let factorial = 1;
    for (let i = 2; i <= num ; i++){
        factorial *= i ;
    }
    resultado.textContent= "  El factorial de " + num + " es " + factorial; 

}
/* Funcion polindromo verficar  */
function verificarPalindromo() {
    const inputPalindromo = document.getElementById("inputpalindromo"); 
    const respuesta = document.getElementById("respuesta2");
    const texto = inputPalindromo.value.toLowerCase().replace(/[^a-z]/g, "");

    if (texto === "") {
        respuesta.textContent = "Por favor ingresa una palabra valida ";
        return;
    }
    const reverse = texto.split("").reverse().join("");

    if (texto === reverse){
        respuesta.textContent = "Si, la palabra "+ inputPalindromo.value + ". Es un palindromo ";
    } else {
        respuesta.textContent = 
        "no, la palabra " + inputPalindromo.value + ". No es un palindromo "
    }

}





