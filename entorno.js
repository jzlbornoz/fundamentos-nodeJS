let Nombre = process.env.NOMBRE || "Error: sin nombre";
let Edad = process.env.EDAD || "Error: sin edad";
let ci = process.env.CI || " y no tengo cedula";
 
console.log("hola " + Nombre + " y tengo " + Edad);
console.log(ci)

//Al utilizar variables de entorno es recomendado que sean en mayusculas con snake_case;