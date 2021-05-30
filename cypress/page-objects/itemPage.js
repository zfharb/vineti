import Page from './page';

const SELECTORS = {
    ADD_TO_CART_BUTTON: 'Add to cart'
};

class ItemPage extends Page {
    constructor() {
        super(SELECTORS);
    }

    clickAddToCartButton() {
        cy.get(`a:contains("${SELECTORS.ADD_TO_CART_BUTTON}")`, { timeout: 10000 }).click({force: true});
    }
   
}

export default new ItemPage();