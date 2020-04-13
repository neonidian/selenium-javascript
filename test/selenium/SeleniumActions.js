const { until, By, Key } = require('selenium-webdriver');

class SeleniumActions {
    constructor(driver) {
        this.driver = driver;
    }

    async loadUrl(url) {
        await this.driver.get(url).catch(error => { throw(error) });
    }

    async enterTextAndPressEnterKey(text) {
        await this.driver.findElement(By.id('source')).sendKeys(text, Key.RETURN).catch(error =>  { throw(error) });
    }

    async waitUntilElementIsLocated(timeout) {
        await this.driver.wait(until.elementLocated(By.id('source')), timeout).catch(error =>  { throw(error) });
    }

    async waitUntilPageTitleIsDisplayed(webPageTitle, timeout) {
        await this.driver.wait(until.titleIs(webPageTitle), timeout).catch(error =>  { throw(error) });
    }

    async getInnerText() {
        return await this.driver.wait(until.elementLocated(By.css('.translation span')), 2000).getText()
            .catch(error => { throw(error) });
    }
}

module.exports = SeleniumActions;
