const http = require('http');

const router = (req, res) => {
    console.log("nueva peticion");
    console.log(req.url);

    switch (req.url) {
        case "/saludo":
            res.write("Hola mundo");
            res.end();
            break;

        default:
            res.write("404: Cambia la ruta");
            res.end();
            break;
    }

};

http.createServer(router).listen(3000);

