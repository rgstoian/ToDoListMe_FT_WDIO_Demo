import {assert} from 'chai';
import BasePage from 'test/pageobjects/BasePage';

class Login extends BasePage {

    // region WebElements
    get syncWithServer() {
        return $('div.ui-dialog-buttonset').$('button*=Overwrite lists');
    }

    get syncIcon() {
        return $('#sync_icon');
    }

    get syncForm() {
        return $('#syncform');
    }

    get loggedInUser() {
        return $('#loggedinas');
    }
    // endregion

    performLogin() {

        const username = 'todolisttest@maillink.live';
        const password = 'P@ssw0rd1';

        // open browser
        browser.url('/');

        // wait for the page to load and the sync button to be displayed
        this.syncIcon.waitForDisplayed();
        this.syncIcon.click();

        // wait for the sync panel to fully open
        browser.waitUntil(() => {
            return this.syncForm.getAttribute('style') === 'display: block;';
        });

        // input the username & password, login then check for the user to be logged in
        $('#syncname').setValue(username);
        $('#syncpassword').setValue(password);
        $('#syncbutton').click();
        this.loggedInUser.waitForDisplayed();
        assert.equal(this.loggedInUser.getText(), username, 'User successfully logged in');

        // optional: check if the mismatched lists prompt appears
        // then click on the button that prefers the server lists
        try {
            this.syncWithServer.waitForDisplayed();
            this.syncWithServer.click();
        } catch (e) {
            console.log('Lists already synced');
        }

        // wait for the panel to close
        browser.waitUntil(() => {
            return this.syncForm.getAttribute('style') === 'display: none;';
        });

        // wait for the Blank list of the account to load
        browser.$('span.listname=Blank').waitForDisplayed();
    }

    performLogout() {
        // wait for the lists to be synced to the server, then reload the session
        browser.waitUntil(() => {
            return this.syncIcon.getAttribute('title') === 'Lists synced';
        }, 15000);

        // reload session to ensure a clean slate for every test run
        browser.reloadSession();
    }
}

export default new Login();
