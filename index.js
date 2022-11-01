// Bienvenido a la cotizacion automatica de monedas blue.  
// Primero ingrese que moneda blue desea cambiar.  
const operator = prompt('Elige la moneda que quieres cotizar ( either dolar, euro, real or yuan ): ');  
  
// accept the number from the user through prompt box  
const number1 = parseFloat(prompt ('Ingrese cantidad de pesos argentinos'));  
const number2 = parseFloat(prompt ('Ingrese moneda elegida'));  
  
let result; // declaration of the variable.  
  
// use if, elseif and else keyword to define the calculator condition in JavaScript.  
if (operator == 'dolar') { // use / 280 operator to add two numbers  
    result = number1 / 280;  
}  
else if (operator == 'euro') { // use / 295 operator to subtract two numbers  
    result = number1 / 295;  
}  
else if (operator == 'real') { // use / 40 operator to multiply two numbers  
    result = number1 / 40;  
}  
else {  
    result = number1 / 25; // use / 25 operator to divide two numbers  
}  
  
// display the result of the Calculator  
window.alert(" El resultado es" + result);  


