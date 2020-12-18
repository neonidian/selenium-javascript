const { By } = require('selenium-webdriver');

const seleniumActions = require('../selenium/SeleniumActions');

class HomePage {

    locatorSourceTextToTranslate = By.css('textarea');
    locatorTranslatedText = By.css('div[data-language="en"] span');

    constructor(driver) {
        this.seleniumactions = new seleniumActions(driver);
    }

    async loadGoogleTranslateSwedishToEnglishPage() {
        const url = 'https://translate.google.com/#view=home&op=translate&sl=sv&tl=en';

        await this.seleniumactions.loadUrl(url);
        await this.seleniumactions.waitUntilPageTitleIsDisplayed('Google Translate');
    }

    async enterTextToTranslateAndPressEnterKey(textToTranslate) {
        await this.seleniumactions.enterTextAndPressEnterKey(this.locatorSourceTextToTranslate, textToTranslate);
    }

    async getTranslatedText() {
        return await this.seleniumactions.getInnerText(this.locatorTranslatedText);
    }
}

module.exports = HomePage;
