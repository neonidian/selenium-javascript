const { until, Key } = require('selenium-webdriver');

class SeleniumActions {
    constructor(driver) {
        this.driver = driver;
    }

    async loadUrl(url) {
        await this.driver.get(url).catch(error => { throw(error) });
    }

    async enterTextAndPressEnterKey(locator, text) {
        await this.driver.findElement(locator).sendKeys(text, Key.RETURN).catch(error =>  { throw(error) });
    }

    async waitUntilPageTitleIsDisplayed(webPageTitle) {
        await this.driver.wait(until.titleIs(webPageTitle), 2000).catch(error =>  { throw(error) });
    }

    async getInnerText(locator) {
        return await this.driver.wait(until.elementLocated(locator), 2000).getText()
            .catch(error => { throw(error) });
    }
}

module.exports = SeleniumActions;
