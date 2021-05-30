import Page from './page';
import SignupPopup  from '../page-objects/signupPopup';

const SELECTORS = {
    USERNAME_BOX: '#loginusername',

    PASSWORD_BOX: "#loginpassword",

    LOGIN_BUTTON: "Log in"
};

class LoginPopup extends Page {
    constructor() {
        super(SELECTORS);
    }

    fillUsernameBox(username) {
        cy.wait(500);
        cy.get(SELECTORS.USERNAME_BOX,{force: 'true'} ,{ timeout: 10000 }).type(username);
    }

    fillPasswordBox(password) {
        cy.get(SELECTORS.PASSWORD_BOX, { timeout: 10000 }).type(password);
    }

    clickLoginButton() {
        cy.get(`button:contains("${SELECTORS.LOGIN_BUTTON}")`, { timeout: 10000 }).click({force: true});
    }
}

export default new LoginPopup();