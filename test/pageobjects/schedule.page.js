

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SchedulePage extends Page {
    
    //selectors
    
    get intervalDropdown() {
        return $('//*[contains(@class, "scheduling__period-menu")]/div/div[contains(@class, "jZjzUL")]');
    }

    get employeesIconDivs() {
        return $$('.styled__StyledAvatarDiv-sc-y0eatq-0.dEvmOF');
    }

    get firstEmployeeOpenShiftModalBtn() {
        return $('//*[@id="app-container"]/div/div[2]/div[3]/div/div[2]/div[1]/div/div/div[2]/div[4]/div');

        /* instead of this flaky XPath it would be better to somehow utulize the current date containing aria-label of this element; one idea could be to:
        1. retrieve and store the current system date
        2. select all the board tiles (.board-slot--clickable)
        3. select only the board tiles which has their aria-label populated with the current (retrieved) date and store them in a collection
        4. select the second element from the collection - it would be the board tile for the first employee for the current date 
        (the first element is not assigned to any employee "Open shift")
        */
    }

    get shiftStartTimeInput() {
        return $('#shiftStartEnd_start');
    }

    get shiftEndTimeInput() {
        return $('#shiftStartEnd_end');
    }

    get createShiftBtn() {
        return $('button=Create');
    }

    //actions

    async openCreateShiftModal(openShiftModalBtn) {
        await openShiftModalBtn.click();
    }

    async enterShiftStartTime(startTime) {
        await this.shiftStartTimeInput.addValue(startTime);
    }

    async enterShiftEndTime(endTime) {
        await this.shiftEndTimeInput.addValue(endTime);
    }

    async clickCreateShiftBtn() {
        await this.createShiftBtn.click();
    }

}

module.exports = new SchedulePage();
