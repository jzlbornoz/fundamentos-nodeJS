let i = 0;
let intervalo = setInterval(() => {
    console.log(i);
    if (i === 4) {
        clearInterval(intervalo);
    }

    i++;
}, 1000);

console.log(__dirname);
console.log(__filename);