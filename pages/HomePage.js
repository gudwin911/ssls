const {I} = inject();
const assert = require('assert');

module.exports = {

    title: 'h1',
    product: '.ssls-product-card',
    searchField: '.ssls-input',

    async productsContain(text) {
        let certificates = await I.grabTextFrom(this.product);
        for (let i = 0; i < certificates.length; i++) {
            assert.ok(certificates[i].includes(text));
        }
    }
};
