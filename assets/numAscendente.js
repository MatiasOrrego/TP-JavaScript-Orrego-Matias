let num1 = parseInt(prompt("Ingrese el primer numero:"));
let num2 = parseInt(prompt("Ingrese el segundo numero:"));
let num3 = parseInt(prompt("Ingrese el tercer numero:"));
if (num1<=num2 && num1<=num3 && num2<=num3) {
    console.log ("El orden es:" ,num1, num2, num3);}
    else if (num1<=num2 && num1<=num3 && num2>=num3) {
    console.log ("El orden es:" ,num1, num3, num2);
}else if (num2<=num1 && num2<=num3 && num1<=num3) {
    console.log ("El orden es:" ,num2, num1, num3);
}else if (num2<=num1 && num2<=num3 && num1>=num3) {
    console.log ("El orden es:" ,num2, num3, num1);
}else if (num3<=num1 && num3<=num2 && num1<=num2) {
    console.log ("El orden es:" ,num3, num1, num2);
}else if (num3<=num1 && num3<=num2 && num1>=num3) {
    console.log ("El orden es:" ,num3, num2, num1);
}else{
    console.log ("ERROR")
}