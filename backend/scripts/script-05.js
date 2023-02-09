const { search } = require('../routes/automatizationRoutes');
const {Builder, Browser, By, Key, until} = require("selenium-webdriver")
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require("chromedriver")

const service = () => chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

teste = () => {

    return new Promise((resolve, reject) => {

        (async function example() {

            let driver = await new Builder().forBrowser(Browser.CHROME).build();
    
            try {
                await driver.get('https://www.google.com');
                const searchBar = await driver.findElement(By.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input'))
                await searchBar.sendKeys("cotação euro")
                await searchBar.sendKeys(Key.ENTER)
                
                const valueEuro = await driver.findElement(By.xpath('//*[@id="knowledge-currency__updatable-data-column"]/div[1]/div[2]/span[1]')).getText()
                resolve(valueEuro)
    
            } finally {
                setTimeout(() => {
                    driver.quit();
                }, 10000)
            }
        })
    
        ();
    })
}
module.exports = { teste };