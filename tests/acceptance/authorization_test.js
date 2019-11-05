const {I, Header, HomePage, AuthorizationPage} = inject();

Feature('Authorization tests');

Before(async () => {
    I.amOnPage('/');
});

let email = 'ssls.automation+666@gmail.com';
let password = '123456';

Scenario('registered user successfully log in and see user email', async () => {
    I.see('SSL made easy', HomePage.title);
    Header.clickHeaderLogin();
    I.see('Authorization', AuthorizationPage.title);
    AuthorizationPage.fillEmail(email);
    AuthorizationPage.fillPassword(password);
    AuthorizationPage.clickEyeIcon();
    I.seeInField(AuthorizationPage.passwordField, password);
    AuthorizationPage.clickLogin();
    I.see(email, Header.userPathButton);
    I.seeElement(Header.userStatusDropdown);
});

Scenario('login with not registered user and see error message', async () => {
    Header.clickHeaderLogin();
    AuthorizationPage.loginWith('automation@gmail.com', '123');
    I.waitForVisible(AuthorizationPage.errorPopup);
    I.see('Uh oh! Email or password is incorrect', AuthorizationPage.errorPopup);
});

Scenario('login with invalid email and see error message', async () => {
    Header.clickHeaderLogin();
    AuthorizationPage.loginWith('ssls.automation@@gmail.com', password);
    I.waitForVisible(AuthorizationPage.errorEmailTooltip);
    I.see('Uh oh! This\n' + 'isn’t an email', AuthorizationPage.errorEmailTooltip);
});

Scenario('login with empty email and password and see error messages', async () => {
    Header.clickHeaderLogin();
    AuthorizationPage.clickLogin();
    I.waitForVisible(AuthorizationPage.errorEmailTooltip);
    I.see('Oops, please\n' + 'enter your email', AuthorizationPage.errorEmailTooltip);
    I.see('Looks like you’ve\n' + 'missed this one', AuthorizationPage.errorPassTooltip);
});

Scenario('logged in user logs out and redirects to authorization page', async () => {
    Header.clickHeaderLogin();
    AuthorizationPage.loginWith();
    Header.logout();
    I.see('Authorization', AuthorizationPage.title);
    I.seeCurrentUrlEquals('https://www.sbzend.ssls.com/authorize');
});
