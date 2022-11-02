// Bienvenido a la cotizacion automatica de monedas blue.  
// Primero ingrese que moneda blue desea cambiar.  
const operator = prompt('Elige la moneda que quieres cotizar ( either dolar, euro, real or yuan ): ');  
  

const number1 = parseFloat(prompt ('Ingrese cantidad de pesos argentinos'));  
const number2 = parseFloat(prompt ('Ingrese moneda elegida'));  
  
let result; // declaration of the variable.  
  

if (operator == 'dolar') { 
    result = number1 / 280;  
}  
else if (operator == 'euro') { 
    result = number1 / 295;  
}  
else if (operator == 'real') { 
    result = number1 / 40;  
}  
else {  
    result = number1 / 25; 
}  
  

window.alert(" El resultado es" + result);  


