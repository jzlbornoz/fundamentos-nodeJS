console.time("TODO")
let suma = 0;
console.time('suma')
for (i = 0; i < 100000000; i++) {
    suma += 1;
}
console.timeEnd('suma')

console.time("funcion asincrona");
console.log("Inicia el proceso asincrono")
asincrona().then(() => {
    console.timeEnd("funcion asincrona")
})


console.timeEnd("TODO")

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("termina el proceso asincrono");
            resolve();
        })
    })
}