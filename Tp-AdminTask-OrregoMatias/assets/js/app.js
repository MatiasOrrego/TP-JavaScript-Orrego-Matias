let tareas = [] 
let eleccion = parseInt(prompt(" 0-Salir \n 1- Escribir Tarea \n 2- Listar Tareas \n 3- Editar Tareas \n 4- Eliminar Tareas"));
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