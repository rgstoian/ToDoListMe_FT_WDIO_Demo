import Lists from 'test/pageobjects/Lists';
import LoginPage from 'test/pageobjects/Login';

let TCnumber = 1;
const currentDateTime = new Date().toISOString();

describe('ToDoListMe', () => {
    beforeEach('Prepare environment', () => {
        LoginPage.performLogin();
        Lists.createNewList('WDIO TC ' + TCnumber + ' ' + currentDateTime);
        TCnumber++;
    });

    it('Enter several items', () => {
        Lists.addNewItems(5);
    });

    afterEach('Purge environment', () => {
        LoginPage.performLogout();
    });

});
