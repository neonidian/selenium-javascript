const Seleniumactions = require('../selenium/Seleniumactions')

class Homepage {
    constructor(driver) {
        this.seleniumactions = new Seleniumactions(driver);
    }

    async loadGoogleTranslateSwedishToEnglishPageUrl() {
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

module.exports = Homepage;
