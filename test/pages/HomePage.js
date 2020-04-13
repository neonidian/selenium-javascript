const seleniumActions = require('../selenium/SeleniumActions');

class HomePage {
    constructor(driver) {
        this.seleniumactions = new seleniumActions(driver);
    }

    async loadGoogleTranslateSwedishToEnglishPage() {
        const url = 'https://translate.google.com/#view=home&op=translate&sl=sv&tl=en';

        await this.seleniumactions.loadUrl(url);
        await this.seleniumactions.waitUntilPageTitleIsDisplayed('Google Translate', 2000);
    }

    async enterTextToTranslateAndPressEnterKey(textToTranslate) {
        await this.seleniumactions.enterTextAndPressEnterKey(textToTranslate);
    }

    async getTranslatedText() {
        return await this.seleniumactions.getInnerText();
    }
}

module.exports = HomePage;
