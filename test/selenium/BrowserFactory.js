const { Builder } = require('selenium-webdriver');
require('geckodriver');
require('chromedriver');

class BrowserFactory {

    async startBrowser(browser = 'firefox') {
        return await new Builder().forBrowser(browser).build();
    }
}

module.exports = BrowserFactory;
