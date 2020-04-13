const { Builder } = require('selenium-webdriver');
require('geckodriver');

class Browserfactory {

    async startBrowser() {
       return await new Builder().forBrowser('firefox').build();
    }
}

module.exports = Browserfactory;
