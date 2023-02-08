teste = () => {
    const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

    (async function example() {

        let driver = await new Builder().forBrowser(Browser.FIREFOX).build();

        try {
            await driver.get('https://www.google.com/ncr');
            await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
            await driver.wait(until.titleIs('webdriver - Google Search'), 1000);


        } finally {
            setTimeout(() => {
                driver.quit();
            }, 5000)
        }
    })

    ();

    return "Código 06 Executado"
}
module.exports = { teste };