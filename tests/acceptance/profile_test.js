const {I, Header, AuthorizationPage, ProfilePage} = inject();
const assert = require('assert');

Feature('My profile page tests');

Before(async () => {
    I.amOnPage('/');
    Header.clickHeaderLogin();
    AuthorizationPage.loginWith();
    Header.goToProfile();
});

Scenario('check user profile values', async () => {
    let name = await I.grabTextFrom(ProfilePage.userNameSelector);
    let email = await I.grabTextFrom(ProfilePage.userEmailSelector);
    let pass = await I.grabTextFrom(ProfilePage.userPassSelector);
    let phone = await I.grabTextFrom(ProfilePage.userPhoneSelector);
    let address = await I.grabTextFrom(ProfilePage.userAddressSelector);
    let pin = await I.grabTextFrom(ProfilePage.userPinSelector);
    let newsletter = (await I.grabAttributeFrom(ProfilePage.newsCheckbox, 'checked')).toString();
    Header.logout();

    AuthorizationPage.loginWith();
    Header.goToProfile();
    I.see(name, ProfilePage.userNameSelector);
    I.see(email, ProfilePage.userEmailSelector);
    I.see(pass, ProfilePage.userPassSelector);
    I.see(phone, ProfilePage.userPhoneSelector);
    I.see(address, ProfilePage.userAddressSelector);
    I.see(pin, ProfilePage.userPinSelector);
    newsletter ? I.seeCheckboxIsChecked(ProfilePage.newsCheckbox) : I.dontSeeCheckboxIsChecked(ProfilePage.newsCheckbox);
});

Scenario('refresh support pin', async () => {
    let oldPin = await I.grabTextFrom(ProfilePage.userPinSelector);
    I.click(ProfilePage.refreshPinButton);
    I.waitForVisible(ProfilePage.dataLoading);
    I.waitForInvisible(ProfilePage.dataLoading);
    I.dontSee(oldPin, ProfilePage.userPinSelector);
    let newPin = await I.grabTextFrom(ProfilePage.userPinSelector);
    assert.ok(newPin);
});
