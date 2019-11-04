const {I, Header, HomePage, AuthorizationPage} = inject();
const assert = require('assert');

Feature('Authorization tests');

Before(async () => {
    I.amOnPage('/');
});

Scenario('registered user successfully log in and see user email', async () => {
    let email = 'ssls.automation+666@gmail.com';
    let password = '123456';

    I.see('SSL made easy', HomePage.title);
    Header.clickHeaderLogin();
    I.see('Authorization', AuthorizationPage.title)
    AuthorizationPage.fillEmail(email);
    AuthorizationPage.fillPassword(password);
    AuthorizationPage.clickEyeIcon();
    assert.equal(await I.grabValueFrom(AuthorizationPage.passwordField), '123456');
    AuthorizationPage.clickLogin();
    I.see('ssls.automation+666@gmail.com', Header.userPathButton);
    I.seeElement(Header.userStatusDropdown);
});

Scenario('login with not registered user and see error message', async () => {
    Header.clickHeaderLogin();
    AuthorizationPage.loginWith('automation@gmail.com', '123');
    I.waitForVisible(AuthorizationPage.errorPopup);
    assert.equal(await I.grabTextFrom(AuthorizationPage.errorPopup), 'Uh oh! Email or password is incorrect');
});

Scenario('login with invalid email and see error message', async () => {
    Header.clickHeaderLogin();
    AuthorizationPage.loginWith('ssls.automation@@gmail.com', '123456');
    I.waitForVisible(AuthorizationPage.errorEmailTooltip);
    assert.equal(await I.grabTextFrom(AuthorizationPage.errorEmailTooltip), 'Uh oh! This\n' + 'isn’t an email');
});

Scenario('login with empty email and password and see error messages', async () => {
    Header.clickHeaderLogin();
    AuthorizationPage.clickLogin();
    I.waitForVisible(AuthorizationPage.errorEmailTooltip);
    assert.equal(await I.grabTextFrom(AuthorizationPage.errorEmailTooltip), 'Oops, please\n' + 'enter your email');
    assert.equal(await I.grabTextFrom(AuthorizationPage.errorPassTooltip), 'Looks like you’ve\n' + 'missed this one');
});

Scenario('logged in user logs out and redirects to authorization page', async () => {
    Header.clickHeaderLogin();
    AuthorizationPage.loginWith();
    Header.logout();
    I.see('Authorization', AuthorizationPage.title);
    I.seeCurrentUrlEquals('https://www.sbzend.ssls.com/authorize');
});
