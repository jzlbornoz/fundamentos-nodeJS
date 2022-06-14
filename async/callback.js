const saludoAsincrono = (nombre, miCallback) => {
    setTimeout(() => {
        console.log("Hola " + nombre);
        miCallback(nombre);
    }, 2000)
}

//Callback(miCallback) que se le pasa al saludo asincrono
const despedidaAsincrona = (nombre, callbackFinal) => {
    setTimeout(() => {
        console.log("Adios " + nombre)
        callbackFinal();
    }, 1000)
}

console.log("Inicia proceso...")

saludoAsincrono("EL PEPE", (nombre) => {
    despedidaAsincrona(nombre, () => {
        console.log("Terminando proceso");
    })
});


