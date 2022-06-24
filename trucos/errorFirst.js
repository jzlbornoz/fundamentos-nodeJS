const asincrona = (callback) => {
    setTimeout(() => {
        try {
            let a = e + 21
            callback(null, a)
        } catch (err) {
            callback(err);
        }
    }, 1000)
}

asincrona((err, dato) => {
    if (err) {
        console.error("Ha habido un error: ");
        console.error(err);
        return false;
    }

    console.log("todo ha ido bien")
})