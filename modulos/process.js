process.on('exit', () => {
    console.log("============terminado==================")
})
process.on('beforeExit', () => {
    console.log("##Entes de terminar te digo: hola")
})

process.on('uncaughtException', (err, origen) => {
    console.error("No se ha capturado el siguiente error: " + err)
    console.error("El origen es: " + origen)
    setTimeout(() => {
        console.log("Esto viene despues de las exceptions")
    })
})


a + blur;

console.log("El proceso sigue"); // esto  no aparece por el error
