const chai = require('chai')
const { Builder, By, Key, until } = require('selenium-webdriver');
const { ServiceBuilder } = require('selenium-webdriver/firefox')

describe('request', function () {
    it('should start a browser', function () {
        (async function example() {
            const serviceBuilder = new ServiceBuilder(`${__dirname}/resources/geckodriver.exe`);
            let driver = await new Builder().forBrowser('firefox').setFirefoxService(serviceBuilder).build();
            try {
                await driver.get('http://www.google.com/ncr');
                await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
                await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
            }
            catch (error) {
                console.error(`Error: ${error}`)
            }
            finally {
                await driver.quit();
            }
        })();
    });
});

