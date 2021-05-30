import Page from './page';
import SignupPopup  from '../page-objects/signupPopup';
import LoginPopup  from '../page-objects/loginPopup';
import ItemPage  from '../page-objects/itemPage';

const SELECTORS = {
    SIGN_UP_BUTTON: '#signin2',
    LOG_IN_BUTTON: '#login2'
};

class LandingPage extends Page {
    constructor() {
        super(SELECTORS);
    }

    clickSignUpButton() {
        cy.get(SELECTORS.SIGN_UP_BUTTON, { timeout: 10000 }).click({force: true});
        return SignupPopup;
    }

    clickLoginButton() {
        cy.get(SELECTORS.LOG_IN_BUTTON, { timeout: 10000 }).click({force: true});
        return LoginPopup;
    }

    clickItemByName(itemName) {
        cy.get(`a:contains("${itemName}")`, { timeout: 10000 }).click({force: true});
        return ItemPage;
    }

    
}

export default new LandingPage();