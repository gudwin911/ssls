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
    let name = await ProfilePage.grabUserDataValue('Name');
    let email = await ProfilePage.grabUserDataValue('Email');
    let pass = await ProfilePage.grabUserDataValue('Password');
    let phone = await ProfilePage.grabUserDataValue('Phone');
    let address = await ProfilePage.grabUserDataValue('Address');
    let pin = await ProfilePage.grabUserDataValue('Support pin');
    Header.logout();

    AuthorizationPage.loginWith();
    Header.goToProfile();
    assert.equal(await ProfilePage.grabUserDataValue('Name'), name, 'Name is not equal');
    assert.equal(await ProfilePage.grabUserDataValue('Email'), email, 'Email is not equal');
    assert.equal(await ProfilePage.grabUserDataValue('Password'), pass, 'Password is not equal');
    assert.equal(await ProfilePage.grabUserDataValue('Phone'), phone, 'Phone is not equal');
    assert.equal(await ProfilePage.grabUserDataValue('Address'), address, 'Address is not equal');
    assert.equal(await ProfilePage.grabUserDataValue('Support pin'), pin, 'Support pin is not equal');
});

Scenario('refresh support pin', async () => {
    let oldPin = await ProfilePage.grabUserDataValue('Support pin');
    assert.ok(oldPin);
    I.click(ProfilePage.refreshPinButton);
    I.waitForVisible(ProfilePage.dataLoading);
    I.waitForInvisible(ProfilePage.dataLoading);
    let newPin = await ProfilePage.grabUserDataValue('Support pin');
    assert.ok(newPin);
    assert.notEqual(newPin, oldPin, 'Support pin has not been changed');
});
