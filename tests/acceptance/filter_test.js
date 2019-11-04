const {I, Header, HomePage, Filters} = inject();

Feature('Filter tests');

Before(async () => {
    I.amOnPage('/');
});

Scenario('click "Basic & Fast" filter and see only product cards with "Domain Validation"', async () => {
    I.click(Filters.basic);
    await HomePage.productsContain('Domain Validation');
    I.click(Filters.basic);
});

Scenario('click "Business" and "One site" filter and see only product cards with "Organization Validation"', async () => {
    I.click(Filters.business);
    I.click(Filters.oneSite);
    await HomePage.productsContain('Organization Validation');
    I.click(Filters.business);
    I.click(Filters.oneSite);
});

Scenario('find a product using search', async () => {
    I.click(Header.searchIcon);
    I.waitForElement(HomePage.searchField);
    I.fillField(HomePage.searchField, 'PositiveSSL');
    await HomePage.productsContain('PositiveSSL');
});
