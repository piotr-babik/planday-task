const { config } = require('../../wdio.conf');
const HomePage = require('../pageobjects/home.page');
const LoginPage = require('../pageobjects/login.page');

describe('Home page', () => {
    before(async () => {

        await LoginPage.open();
        await LoginPage.cookiesConsentBtn.click();
        await LoginPage.login(config.login, config.password);
    });
    it('should navigate to Schedule page', async () => {

        await HomePage.goToSchedulePage();
        await expect(browser).toHaveUrlContaining('/page/schedule');
    });

});


