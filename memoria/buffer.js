//Buffer basico
let buffer0 = Buffer.alloc(3);
console.log("===Buffer basico: ");
console.log(buffer0);

//Buffer from 
let buffer1 = Buffer.from([12 , 23, 1245, 124]);
console.log('===Buffer from: ');
console.log(buffer1);

//Buffer from con string
let buffer2 = Buffer.from("hola que se dice por ahi");
console.log(buffer2)
console.log(buffer2.toString())

//Abecedario con Buffer
console.log("====Abecedario====");

let abc = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString());