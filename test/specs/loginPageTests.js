const { config } = require('../../wdio.conf');
const LoginPage = require('../pageobjects/login.page');

describe('Login page', () => {
    before(async () => {

        await LoginPage.open();
        await LoginPage.cookiesConsentBtn.click();
    });
    it('login form should be present', async () => {

        await expect(LoginPage.loginForm).toBePresent();
    });
    it('should login with valid credentials', async () => {

        await LoginPage.login(config.login, config.password);
        await expect(browser).toHaveTitle('Planday | Home');
        await expect(browser).toHaveUrl('https://test1234.planday.com/page/home');
    });

});


