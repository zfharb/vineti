import Page from './page';

const SELECTORS = {
    CART_TABLE : '#tbodyid'

};

class CartPage extends Page {
    constructor() {
        super(SELECTORS);
    }

    verifyItemTitle(itemTitle) {
        cy.get(SELECTORS.CART_TABLE,{force: 'true'} ,{ timeout: 10000 }).contains(itemTitle).should('have.text', itemTitle);
        
    }

}

export default new CartPage();