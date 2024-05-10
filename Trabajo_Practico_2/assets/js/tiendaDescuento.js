let articulo = prompt('Ingrese el articulo:');
let numArticulos = parseInt(prompt('Cuantas unidades lleva:'))
let precio = parseInt(prompt('Ingrese el precio de su producto por unidad:'))
if (
    isNaN(numArticulos) ||
    isNaN(precio) ||
    isNaN(articulo)|| 
    cantArticulos == ""|| 
    precioUnit == "" ||
    articulo == ""
    ) {
    console.log("Ingrese solo valores numericos en el precio y la cantidad de unidades y solo letras para el articulo ")
    };
if(numArticulos > 1) {
    let precioTotal = numArticulos * precio;
    if (numArticulos >= 10){
        if (precioTotal >= 20000){
            let descuento = precioTotal - (precioTotal * 0.15);
            console.log('Usted obtuvo un descuento del 15%, el total es: ', descuento);
        } else {
            console.log('El precio total de productos no supera los $20000, su total es:', precioTotal);
        }
    } else {
        console.log('Usted compro menos de 10 productos, el precio es: ', precioTotal);
    }
} else if (numArticulos === 0){
    console.log('Usted no puede comprar 0 articulos.');
} else if( isNaN(numArticulos) || isNaN(precioUnit) ) { 
    console.log('No ha ingresado valores numericos en la cantidad de articulos y en el precio unitario.')
} else {
    console.log('Usted compro un solo producto, el total es: ', precio);
};