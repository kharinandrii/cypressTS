import { onLoginPage } from "../support/page_objects/loginPage"
import { onAccountPage } from "../support/page_objects/myAccountPage"

describe("Tests block one", () => {

    beforeEach('open app', () =>{
        cy.visit('/')
    })
    it('first page', () => {
        onLoginPage.loginInSystem();
        onAccountPage.checkTitleIsVisible();
        onAccountPage.clickOnHomePageLink();
    })
})