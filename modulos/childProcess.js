const { exec, spawn} = require("child_process");

exec("node modulos/console.js", (err, stdout, sterr) => {
    if (err) {
        console.error(err);
        return false
    }
    console.log(stdout);
});

let process = spawn('ls', ['-la']);

console.table(process.pid);

process.stdout.on("data" , (data) => {
    console.log(data.toString())
})

process.on('exit' , () => {
    console.log("El proceso termino")
})