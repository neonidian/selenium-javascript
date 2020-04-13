const { Builder } = require('selenium-webdriver');
require('geckodriver');

class BrowserFactory {

    async startBrowser() {
        return await new Builder().forBrowser('firefox').build();
    }
}

module.exports = BrowserFactory;
