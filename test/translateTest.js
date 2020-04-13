const expect = require('chai').expect;

const BrowserFactory = require('./selenium/BrowserFactory');
const HomePage = require('./pages/HomePage');

describe('Google Translate', () => {
    it('should translate Swedish to English', async () => {
        let driver = await new BrowserFactory().startBrowser();
        let homepage = new HomePage(driver);

        try {
            await homepage.loadGoogleTranslateSwedishToEnglishPage();
            await homepage.enterTextToTranslateAndPressEnterKey('Varsågod');

            let translatedText = await homepage.getTranslatedText();

            expect(translatedText).equal('You are welcome');
        } finally {
            await driver.quit();
        }
    });
});
