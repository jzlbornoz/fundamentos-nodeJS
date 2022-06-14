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

const hablar = (callback) => {
    setTimeout(() => {
        console.log("bla bla bla bla...")
        callback();
    }, 1000)
}


// En esta funcion se utliza la recursividad
const conversacion = (nombre, veces, callback) => {
    if (veces > 0) {
        hablar(() => {
            conversacion(nombre , --veces, callback);
        })
    } else {
        despedidaAsincrona(nombre , () => {
            console.log(" FIN DEL PROCESO")
        });
    }
}

console.log("Inicia proceso...");
saludoAsincrono( "Lionel" , (nombre) => {
    conversacion(nombre , 3 , despedidaAsincrona)
});
