const expect = require('chai').expect;

const Browserfactory = require('./selenium/Browserfactory');
const Homepage  = require('./pages/Homepage')

describe('Google Translate', function () {
    it('should translate Swedish to English', async function () {
        let driver = await new Browserfactory().startBrowser();
        let homepage = new Homepage(driver);

        try {
            await homepage.loadGoogleTranslateSwedishToEnglishPageUrl();
            await homepage.enterTextToTranslateAndPressEnterKey('Varsågod');

            let prom = await homepage.getTranslatedText();

            expect(prom)
                .to.be.a('string')
                .and.equal('You are welcome');
        } catch (error) {
            throw(error);
        } finally {
            await driver.quit();
        }
    });
});
