const expect = require('chai').expect;

const BrowserFactory = require('./selenium/BrowserFactory');
const HomePage = require('./pages/HomePage');

describe('Google Translate', function () {
    it('should translate Swedish to English', async function () {
        let driver = await new BrowserFactory().startBrowser();
        let homepage = new HomePage(driver);

        try {
            await homepage.loadGoogleTranslateSwedishToEnglishPage();
            await homepage.enterTextToTranslateAndPressEnterKey('Varsågod');

            let prom = await homepage.getTranslatedText();

            expect(prom).equal('You are welcome');
        } catch (error) {
            throw(error);
        } finally {
            await driver.quit();
        }
    });
});
