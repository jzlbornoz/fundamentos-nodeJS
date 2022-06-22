const bcrypt = require('bcrypt');

const password = "17072004";

bcrypt.hash(password, 6, (err, hash) => {
    console.log("La password es encriptada es: " + hash);

    //Validacion
    bcrypt.compare(password, hash, (err, res) => {
        console.log(res)
    });
});