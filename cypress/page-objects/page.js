

const SELECTORS = {
    CART_BUTTON: 'Cart'
};

export default class Page {
    constructor(selector) {
        this.SELECTORS = {...this.SELECTORS, ...selector};
    }

    clickCartButton() {
        cy.get(`a:contains("${SELECTORS.CART_BUTTON}")`, { timeout: 10000 }).click({force: true});
    }
}