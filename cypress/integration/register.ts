///<reference types="Cypress" />
/// <reference types="cypress-xpath" />
import fake from 'ts-faker';
describe("Tests block one", () => {
 
  it('create account', () => {
    cy.visit('/');
    cy.get("a.login").click();
    cy.get("#email_create").type("ggdsgsdg@sffs.ios");
    cy.get("#SubmitCreate").click();
    cy.get("#id_gender1").click();
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