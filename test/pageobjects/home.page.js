

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    
    //selectors
    
    get scheduleNavBtn() {
        return $('li.icDWIA').$('//a[@title="Schedule"]');
    }

    //actions

    async goToSchedulePage () {
        
        await this.scheduleNavBtn.click();
    }
}

module.exports = new HomePage();
