const {I} = inject();

module.exports = {

    userDataSelector: '//div[@class="item"][contains(., "{0}")]/div[@class="description"]',
    refreshPinButton: '[name="supportPin"]',
    dataLoading: '.disabled',

    grabUserDataValue(dataName) {
        let selector = this.userDataSelector.replace('{0}', dataName);
        return I.grabTextFrom(selector);
    }
};
