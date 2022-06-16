async function saludoAsincrono(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 2000)
    })

}

//Callback(miCallback) que se le pasa al saludo asincrono
async function despedidaAsincrona(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adios " + nombre)
            resolve(nombre);
        }, 1000)
    })
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("bla bla bla bla...");
            resolve(nombre);
        }, 1000)
    })

}

async function main() {
    let nombre = await saludoAsincrono("Carlos");
    await hablar();
    await hablar();
    await despedidaAsincrona(nombre);
    console.log("Termina el proceso");
}


// --- 
console.log("===Inicia el proceso===");
main();
console.log("===Seguna sentencia===");
