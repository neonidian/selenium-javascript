const {Builder, By, Key, until} = require('selenium-webdriver');
require('geckodriver');
const expect = require('chai').expect;

describe('Google Translate', function () {
    it('should translate Swedish to English', async function () {
        let driver = await new Builder().forBrowser('firefox').build();
        try {
            await driver.get('https://translate.google.com/#view=home&op=translate&sl=sv&tl=en');
            await driver.wait(until.titleIs('Google Translate'), 2000);

            await driver.findElement(By.id('source')).sendKeys('varsågod', Key.RETURN);
            let prom = await driver.wait(until.elementLocated(By.css('.translation span')), 2000).getText()

            expect(prom)
                .to.be.a('string')
                .and.equal('You are welcome')
        } catch (error) {
            expect.fail(`Error while executing test: ${error}`);
        } finally {
            await driver.quit();
        }
    });
});
