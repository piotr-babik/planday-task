const { config } = require('../../wdio.conf');
const HomePage = require('../pageobjects/home.page');
const SchedulePage = require('../pageobjects/schedule.page');
const LoginPage = require('../pageobjects/login.page');


describe('Schedule page', () => {

    before(async () => {

        await LoginPage.open();
        await LoginPage.cookiesConsentBtn.click();
        await LoginPage.login(config.login, config.password);
        await browser.pause(4000);  //should be refactored to use e.g. "waitForVisble"
        await HomePage.goToSchedulePage();
    });
    it('should have an interval of one week by default', async () => {

        // false positive; not working, unable to locate element...
        const dropdown = await SchedulePage.intervalDropdown;
        expect(dropdown).toHaveText('Week');
    });

    const expectedEmployeesCount = 3;
    const emplCountTestTitle = `number of displayed employees should be ${expectedEmployeesCount}`;

    it(emplCountTestTitle, async () => {

        // this works, but definitely should be refactored...
        await browser.pause(4000);
        await browser.switchToFrame(0);
        const employeesCount = await SchedulePage.employeesIconDivs.length;
        expect(employeesCount).toEqual(expectedEmployeesCount);
    });
    it('shift should be created and visible on the Schedule grid', async () => {

        const employee = await SchedulePage.firstEmployeeOpenShiftModalBtn;
        await SchedulePage.openCreateShiftModal(employee);
        browser.switchToFrame($('.edit-shift-modal'));
        await SchedulePage.enterShiftStartTime('9.00');
        await SchedulePage.enterShiftEndTime('17.00');
        await SchedulePage.clickCreateShiftBtn();
        
        /*  Q: "How would you assert that the shift created is visible on the Schedule grid?"
            A: I would check if the cell has a child element with a class ".shift-tile--assigned" and would
            check if it doesn't have properties of "display: none" and "visibility: hidden" (both handled by the "toBeDisplayed()" function). 
            Additionally it would be worth to check if this element also doesn't have its "position" property changed to "absolute" 
            (so the element might be shifted out of view).
        */
        const shiftCreatedElem = employee.$('.shift-tile--assigned');
        await expect(shiftCreatedElem).toExist();
        await expect(shiftCreatedElem).toBeDisplayed();
    });

    after('Remove added shift', async () => {

        //TODO
    });
});


