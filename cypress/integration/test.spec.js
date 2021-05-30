import { visitBaseURL } from '../fixtures/test-base';
import LandingPage  from '../page-objects/landingPage';
import CartPage  from '../page-objects/cartPage';
import SignupPopup  from '../page-objects/signupPopup';
import LoginPopup  from '../page-objects/loginPopup';
import ItemPage  from '../page-objects/itemPage';


describe('test suite for demoblaze site', () => {
      it('it should add samsung galaxy s6 to cart', () => {
        visitBaseURL();
        LandingPage.clickSignUpButton();
        let username  = 'vineti' + Date.now();
        SignupPopup.fillUsernameBox(username)
        SignupPopup.fillPasswordBox('123')
        SignupPopup.clickSignupButton()
        LandingPage.clickLoginButton();
        LoginPopup.fillUsernameBox(username);
        LoginPopup.fillPasswordBox('123');
        LoginPopup.clickLoginButton();
        LandingPage.clickItemByName('Samsung galaxy s6')
        ItemPage.clickAddToCartButton();
        ItemPage.clickCartButton();
        CartPage.verifyItemTitle('Samsung galaxy s6');
      })
     
})
