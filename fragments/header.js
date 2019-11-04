const {I} = inject();

module.exports = {

    loginButton: '.user-box [href="/authorize"]',
    userPathButton: '.user-box .user-btn',
    userStatusDropdown: '.user-box button[nc-dropdown-trigger="statusOpened"]',
    logoutButton: 'button[ng-click="$ctrl.logout()"]',
    profileButton: 'a[href="/user/profile"]',
    searchIcon: '.icon-search',

    clickHeaderLogin() {
        I.click(this.loginButton)
    },

    logout() {
        I.click(this.userStatusDropdown);
        I.waitForVisible(this.logoutButton);
        I.click(this.logoutButton);
    },

    goToProfile() {
        I.click(this.userStatusDropdown);
        I.waitForVisible(this.profileButton);
        I.click(this.profileButton);
    },
};
