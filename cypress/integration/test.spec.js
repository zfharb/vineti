// require('cypress-xpath')
import { visitBaseURL } from '../fixtures/test-base';
import LandingPage  from '../page-objects/landingPage';
import Header  from '../page-objects/header';


describe('test suite for demoblaze site', () => {
    context('', () => {
      it('it should visit hobsons home page', () => {
        visitBaseURL();
        const signupPopup = LandingPage.clickSignUpButton();
        let username  = 'vineti' + Date.now();
        signupPopup.fillUsernameBox(username)
        signupPopup.fillPasswordBox('123')
        signupPopup.clickSignupButton()
        const loginPopup = LandingPage.clickLoginButton();
        loginPopup.fillUsernameBox(username);
        loginPopup.fillPasswordBox('123');
        loginPopup.clickLoginButton();
        const itemPage = LandingPage.clickItemByName('Samsung galaxy s6')
        itemPage.clickAddToCartButton();
        const cartPage = Header.clickCartButton();
        cartPage.verifyItemTitle('Samsung galaxy s6');
        // cy.get('title').should('have.text', 'Education Advances | Hobsons');
      })
     
    })
  })
