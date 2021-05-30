import Page from './page';

const SELECTORS = {
    USERNAME_BOX: '#sign-username',

    PASSWORD_BOX: "#sign-password",

    SIGNUP_BUTTON: "Sign up"
};

class SignupPopup extends Page {
    constructor() {
        super(SELECTORS);
    }

    fillUsernameBox(username) {
        cy.wait(2000);

        cy.get(SELECTORS.USERNAME_BOX,{force: 'true'} ,{ timeout: 10000 }).type(username);
    }

    fillPasswordBox(password) {
        cy.get(SELECTORS.PASSWORD_BOX, { timeout: 10000 }).type(password);
    }

    clickSignupButton() {
        cy.get(`button:contains("${SELECTORS.SIGNUP_BUTTON}")`, { timeout: 10000 }).click({force: true});

    }
}

export default new SignupPopup();