alert("hola");
var intentos = 0;
var a = prompt("Ingresa tu nombre");
alert("Bienvenido " + a);
var b = parseInt(prompt("Ingresa el numero del 1 al 100"));
var num = Math.floor(Math.random()* (100 - 1 + 1) + 1); 
while (b > num || b < num) {
    intentos++;
    if(b>num){alert("muy alto");
   var b = parseInt(prompt("ingresa de nuevo "));
} else if(b < num) {
    alert("muy bajo");
   var b = parseInt(prompt("ingresa de nuevo "));
} 
}
if (b == num){
    alert("felicidades "+ a + "ganaste con "+intentos+" intentos " + ", el numero era "+ num );
}





