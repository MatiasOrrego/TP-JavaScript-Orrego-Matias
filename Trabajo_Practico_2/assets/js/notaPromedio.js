let trimestre1 = parseInt(prompt("Ingrese la nota del primer trimestre:"));
let trimestre2 = parseInt(prompt("Ingrese la nota del segundo trimestre:"));
let trimestre3 = parseInt(prompt("Ingrese la nota del tercer trimestre:"));
let promedio = (trimestre1 + trimestre2 + trimestre3) / 3;
switch (promedio <0 && promedio >10) {
    case 1:
    case 2:
    case 3:
    console.log ("Nota Insuficiente")
    break
    case 4:
    case 5:
    console.log ("Nota Regular")
    break
    case 6:
    case 7:
    console.log ("Nota Buena")
    break
    case 8:
    case 9:
    console.log ("Nota Muy Buena")
    break
    case 10:
    console.log ("Nota Sobresaliente")
        break;
    default:
        console.log ("El promedio no pudo ser calculado, debido a los valores ingresados.")
        break;
}