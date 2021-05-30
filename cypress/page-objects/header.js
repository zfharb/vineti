import CartPage  from '../page-objects/cartPage';

const SELECTORS = {
    CART_BUTTON: 'Cart'
};

class Header {

    clickCartButton() {
        cy.get(`a:contains("${SELECTORS.CART_BUTTON}")`, { timeout: 10000 }).click({force: true});
        return CartPage;
    }
   
}

export default new Header();