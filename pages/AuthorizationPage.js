const {I} = inject();

module.exports = {

    title: 'h1.page-title',
    emailField: locate('[name="email"]').inside('[name="authForm"]'),
    passwordField: locate('[name="password"]').inside('[name="authForm"]'),
    eyeIcon: locate('[ng-click="showPassword = !showPassword"]').inside('[name="authForm"]'),
    submit: locate('[type="submit"]').inside('[name="authForm"]'),
    errorPopup: '.noty_message',
    errorEmailTooltip: locate('[ng-show*="authForm.email.$error"].left-tooltip-box').inside('[name="authForm"]'),
    errorPassTooltip: locate('[ng-show*="authForm.password.$error"].left-tooltip-box').inside('[name="authForm"]'),

    fillEmail(email) {
        I.waitForElement(this.emailField);
        I.fillField(this.emailField, email);
    },

    fillPassword(password) {
        I.waitForElement(this.passwordField);
        I.fillField(this.passwordField, password);
    },

    clickEyeIcon() {
        I.click(this.eyeIcon);
    },

    clickLogin() {
        I.click(this.submit);
    },

    loginWith(email = 'ssls.automation+666@gmail.com', password = '123456') {
        I.waitForElement(this.emailField);
        I.fillField(this.emailField, email);
        I.fillField(this.passwordField, password);
        this.clickLogin();
    }
};
