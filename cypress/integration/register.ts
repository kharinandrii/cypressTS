///<reference types="Cypress" />
/// <reference types="cypress-xpath" />
import fake from 'ts-faker';
describe("Tests block one", () => {
  let emailErrorText = "An account using this email address has already been registered. Please enter a valid password or request a new one. ";
  it.only('create account', () => {
    cy.visit('/');
    cy.get("a.login").click();
    cy.get("#email_create").type("gg12dsgsdg@sffs.ios");
    cy.get("#SubmitCreate").click();
    cy.get("#id_gender1").check();
    cy.get("#id_gender1").should('be.checked');
    cy.get("#customer_firstname").type("Nicolo");
    cy.get("#customer_lastname").type("FamilyName");
    cy.get("#passwd").type("demo1234");
    cy.get("#address1").type("home adress");
    cy.get("#city").type("Kherson");
    cy.get("#id_state").select("Alabama");
    cy.get("#postcode").type("00210");
    cy.get("#phone_mobile").type("0851234567");
    cy.get("#submitAccount").click();
    cy.get('[title="Log me out"]').click()
  });

  it('register with used email', () =>{
    cy.visit('/');
        cy.get("a.login").click();
        cy.url().should('include', 'my-account')
        cy.get("#email_create").type("ggdsgsdg@sffs.ios");
        cy.get("#email_create").should("have.attr", "name", "email_create");
        cy.get("#email_create").should("have.value", "ggdsgsdg@sffs.ios");
        cy.get("#SubmitCreate").click();
        cy.get("#create_account_error").should("have.text", emailErrorText)
})
})



  //https://basarat.gitbook.io/typescript/intro-1/cypress
  //https://glebbahmutov.com/blog/use-typescript-with-cypress/
  //https://docs.cypress.io/guides/tooling/typescript-support#Set-up-your-dev-environment
  //https://www.youtube.com/watch?v=VkNXyq0Z540&list=PLzDWIPKHyNmK9NX9_ng2IdrkEr8L4WwB0&index=3&ab_channel=QACamp
  //https://www.youtube.com/watch?v=0sG1ToNspLA&list=PLzDWIPKHyNmLxpL8iQWZXwl_ln0BgckLt&ab_channel=QACamp
  //https://www.youtube.com/channel/UCDOCAVIhSh5VpJMEfdak1OA/videos
  //https://www.youtube.com/playlist?list=PLUDwpEzHYYLu4jKg-rNSKH3aJeBinlPXp
  //https://filiphric.com/
  //https://ichi.pro/ru/avtomatizirovannoe-testirovanie-s-cypress-26111064922493