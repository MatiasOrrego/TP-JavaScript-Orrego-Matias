let trimestre1 = parseInt(prompt("Ingrese la nota del primer trimestre:"));
let trimestre2 = parseInt(prompt("Ingrese la nota del segundo trimestre:"));
let trimestre3 = parseInt(prompt("Ingrese la nota del tercer trimestre:"));
let promedio = (trimestre1 + trimestre2 + trimestre3) / 3;
if (
    isNaN(trimestre1) ||
    isNaN(trimestre2) ||
    isNaN(trimestre3) ||
    trimestre1 == "" ||
    trimestre2 == "" ||
    trimestre3 == ""
    ) {
    console.log("Ingrese solo numeros");
    } else if (
        trimestre1 < 0 ||
        trimestre1 > 10 ||
        trimestre2 < 0 ||
        trimestre2 > 10 ||
        trimestre3 < 0 ||
        trimestre3 > 10
    ){
        console.log ("Los numeros ingresados deben ser entre 0 a 10")
    }else
    {switch (true) {
        case promedio<=3 && promedio>=1:
        console.log ("Nota Insuficiente")
        break
        case promedio == 4 || promedio == 5:
        console.log ("Nota Regular")
        break
        case promedio == 6 || promedio == 7:
        console.log ("Nota Buena")
        break
        case promedio == 8 || promedio == 9:
        console.log ("Nota Muy Buena")
        break
        case promedio == 10:
        console.log ("Nota Sobresaliente")
        break;
        default:
            console.log ("El promedio no pudo ser calculado, debido a los valores ingresados.")
            break;
    }}
