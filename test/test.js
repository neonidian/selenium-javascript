const chai = require('chai')
const {Builder, By, Key, until} = require('selenium-webdriver');
require('geckodriver')

describe('request', function () {
    it('should start a browser', function () {
        (async function example() {
            let driver = await new Builder().forBrowser('firefox').build();
            try {
                await driver.get('http://www.google.com/ncr');
                await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
                await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
            } catch (error) {
                console.error(`Error: ${error}`)
            } finally {
                await driver.quit();
            }
        })();
    });
});
