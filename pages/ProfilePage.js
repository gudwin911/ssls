module.exports = {

    userNameSelector: locate('.description').inside('[ng-class*="activeRow === \'name\'"]'),
    userEmailSelector: locate('.description').inside('[ng-class*="activeRow === \'email\'"]'),
    userPassSelector: locate('.description').inside('[ng-class*="activeRow === \'password\'"]'),
    userPhoneSelector: locate('.description').inside('[ng-class*="activeRow === \'phone\'"]'),
    userAddressSelector: locate('.description').inside('[ng-class*="activeRow === \'address\'"]'),
    userPinSelector: locate('.description').inside('[ng-class*="activeRow !== \'pin\'"]'),
    newsCheckbox: '[name="newsletterOn"]',
    refreshPinButton: '[name="supportPin"]',
    dataLoading: '.disabled'
};
