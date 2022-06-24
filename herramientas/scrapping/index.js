const puppeteer = require("puppeteer");

(async () => {
    console.log("Se lanza el navegador");
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("https://cinex0.web.app");
    var titulos = await page.evaluate(()=> {
        const h2s = document.querySelector('h2');
        return h2s.innerHTML;
    })
    console.log(titulos)
    console.log("Se cierra el navegador ...");
    browser.close();
    console.log("Cerrado.")
})();