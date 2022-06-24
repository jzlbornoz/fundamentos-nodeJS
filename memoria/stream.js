const fs = require('fs');
const stream = require("stream");
const util = require("util");

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('UTF-8'); // cumple la mimsma funcion de to string  

readableStream.on('data' , (chunk) => {
    console.log(chunk);
})

readableStream.on('end' , () => {
    console.log('termina')
})

// Escribir el buffer
console.log("==========Escrbir en buffer===========");
 process.stdout.write("hola");
 process.stdout.write("que se dice");
 process.stdout.write("esto se escribe en buffer");


 // Transform
const Transform = stream.Transform;
const Mayus = () => {
    Transform.call(this);
}
util.inherits(Mayus , Transform);

Mayus.prototype._transform = (chunk , codif ,cb) => {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}   

let mayus = new Mayus();
readableStream.pipe(mayus).pipe(process.stdout)