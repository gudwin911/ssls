const {I} = inject();

module.exports = {

    title: 'h1',
    product: '.ssls-product-card',
    searchField: '.ssls-input',

    async productsContain(text) {
        let num = await I.getNumberOfVisibleElements(this.product);
        for (let i = 1; i <= num; i++) {
            I.see(text, this.product + `:nth-of-type(${i})`);
        }
    }
};
