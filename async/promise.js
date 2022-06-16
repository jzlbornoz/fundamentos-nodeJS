const saludoAsincrono = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 2000)
    })

}

//Callback(miCallback) que se le pasa al saludo asincrono
const despedidaAsincrona = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adios " + nombre)
            resolve(nombre);
        }, 1000)
    })
}

const hablar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("bla bla bla bla...");
            resolve(nombre);
        }, 1000)
    })

}

//----

console.log("===Inicia el proceso===");
saludoAsincrono("Ana")
    .then(hablar)
    .then(despedidaAsincrona)
    .then((nombre) => {
        console.log("===Termina el proceso " + nombre);
    })
    .catch(error => {
        console.error("hubo un error");
        console.error(error)
    })