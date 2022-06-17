const llamadoError = () => {
    error();
}

const error = () => {
    console.log(12 + b);
};

const errorAsincrono = () => {
    setTimeout(() => {
       try{
        12 + zAsincrona
       }catch(err) {
        console.error("hay error: " + err)
       }
    })
}



//--- 

console.log("====Inicia el proceso====");
try {
    errorAsincrono();
    llamadoError();
} catch (err) {
    console.error("hubo un error: " + err.message);
    console.log("Se ha capturado el error");
};
console.log("===Termina el proceso====")
