import {assert} from 'chai';
import BasePage from 'test/pageobjects/BasePage';

class Lists extends BasePage {

    createNewList(testCaseTitle: string) {
        // click the "add list" button
        $('#addlist').click();

        // set the value of the new list and save
        $('#updatebox').setValue(testCaseTitle);
        browser.$("//input[@value='Save']").click();

        // make sure the newly created list is selected
        browser.$('span.listname=Blank').click();
        browser.$('span.listname=' + testCaseTitle).click();
    }

    // just a demo, add a random number of items and check their existence
    addNewItems(numberOfItems) {
        for (let i = 0; i < numberOfItems; i++) {

            // create a placeholder task
            const listItem = 'Boring Task #' + Math.random().toString().slice(2, 7);

            // enter the new task
            $('#newtodo').setValue(listItem);
            browser.keys(['Enter']);

            // check if it was created
            try {
                $('span*=' + listItem).waitForDisplayed();
            } catch (e) {
            }
            // assert its existence
            assert.equal($('span*=' + listItem).isExisting(), true, 'Newly created list item exists');
        }
        assert.equal($('#mytodos').$$('li').length, numberOfItems, 'A correct number of items has been created');
    }
}

export default new Lists();