

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    
    //selectors
    
    get usernameInput() {
        return $('#Username');
    }

    get passwordInput() {
        return $('#Password');
    }

    get submitBtn() {
        return $('#MainLoginButton');
    }

    get loginForm() {
        return $('#login');
    }

    get cookiesConsentBtn() {
        return $('#cookie-consent-button');
    }

    //actions

    async login (username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.submitBtn.click();
    }

    open() {
        return super.open('/');
    }
}

module.exports = new LoginPage();
