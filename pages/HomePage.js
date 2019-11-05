const {I} = inject();
const assert = require('assert');

module.exports = {

    title: 'h1',
    product: '.ssls-product-card',
    searchField: '.ssls-input',

    async productsContain(text) {
        for (const product of await I.grabTextFrom(this.product)) {
            assert.ok(product.includes(text))
        }
    }
};
