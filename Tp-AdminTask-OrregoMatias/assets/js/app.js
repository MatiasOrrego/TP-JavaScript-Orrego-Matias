let tareas = [] 
let eleccion = 1 
while (eleccion !== 0){
    eleccion = parseInt(prompt(" 0-Salir \n 1- Escribir Tarea \n 2- Listar Tareas \n 3- Editar Tareas \n 4- Eliminar Tareas"));
    switch (eleccion){
        case 0:
            alert("Gracias, Hasta Luego.");
            break;
        case 1:
            AddTarea(prompt("Ingrese la tarea:"));
            break;
        case 2:
            listTarea();
            break;
        case 3:
            editTarea(prompt("Nombre de la tarea que desee editar:"));
        case 4:
            deletTarea(prompt("Nombre de la Tarea que desee eliminar:"));
            break;
        default:
            alert("Ingrese alguna de las opciones anteriores")
            break;
    }
}
function AddTarea(nombre) {
    switch (true) {
        case (nombre === " "):
            alert("No se puede ingresar una tarea vacia.")
            break;
        case ((nombre.charAt(0) == " ")):
            alert("No se puede agragar una tarea con espacio al principio")
            break;
        case ((nombre.charAt(nombre.length -1) == " ")):
            alert("No se puede agregar una tarea con espacio al final.")
            break
        default:
            tarea.push(nombre)
            break;
    }
}
function listTarea() {
    if (tareas.length <= 0) {
        alert("No hay tareas.")
    } else {
        alert("Tareas:\n"+tareas.join("\n"))
    }
}
function editTarea(nombre){
    if (tareas.includes(nombre)) {
        let nuevonombre = prompt ("Ingrese un nuevo nombre para la tarea.")
        switch (true) {
            case (nuevonombre === " "):
                alert("No se puede ingresar una tarea vacia.")
                break;
            case ((nuevonombre.charAt(0) == " ")):
                alert("No se puede agragar una tarea con espacio al principio")
                break;
            case ((nuevonombre.charAt(nuevonombre.length -1) == " ")):
                alert("No se puede agregar una tarea con espacio al final.")
                break;
            default:
                alert("Se cambio la tarea" + nombre + "-->" + nuevonombre);
                tareas[tareas.indexOf(nombre)] = nuevonombre;
        }
    } else{
        alert("Esa Tarea no existe")
    }
}
function deletTarea(nombre){
    if(tareas.includes(nombre)){
        alert("Se elimino la tarea:" + nombre);
        tareas.splice(tareas.indexOf(nombre),1)    
    }else{
        alert("No existe esa Tarea.")
    }
}