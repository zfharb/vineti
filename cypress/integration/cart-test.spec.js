import { visitBaseURL } from '../fixtures/test-base';
import LandingPage  from '../page-objects/landingPage';
import CartPage  from '../page-objects/cartPage';
import SignupPopup  from '../page-objects/signupPopup';
import LoginPopup  from '../page-objects/loginPopup';
import ItemPage  from '../page-objects/itemPage';
import { CREDENTIALS } from '../fixtures/constants';



describe('test suite for demoblaze site', () => {
      it('it should add samsung galaxy s6 to cart', () => {
        visitBaseURL();
        LandingPage.clickSignUpButton();
        SignupPopup.fillUsernameBox(CREDENTIALS.username)
        SignupPopup.fillPasswordBox(CREDENTIALS.password)
        SignupPopup.clickSignupButton()
        LandingPage.clickLoginButton();
        LoginPopup.fillUsernameBox(CREDENTIALS.username);
        LoginPopup.fillPasswordBox(CREDENTIALS.password);
        LoginPopup.clickLoginButton();
        LandingPage.clickItemByName('Samsung galaxy s6')
        ItemPage.clickAddToCartButton();
        ItemPage.clickCartButton();
        CartPage.verifyItemTitle('Samsung galaxy s6');
      })
     
})
