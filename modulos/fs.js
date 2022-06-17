const fs = require("fs");

const leer = (ruta, callback) => {
    fs.readFile(ruta, (error, data) => {
        callback(data.toString());
    })
}

const escribir = (rute, content, cb) => {
    fs.writeFile(rute, content, (error, cb) => {
        if (error) {
            console.error("No se ha podido escribir: " + error)
        } else {
            console.log("Exitoso")
        }
    })
}

const borrar = (path , cb) => {
    fs.unlink(path , cb);
};


//--

escribir(__dirname + "/texto.txt", "Nueva linea");
leer(__dirname + '/texto.txt', console.log);
borrar(__dirname + "/texto1.txt" , console.log)