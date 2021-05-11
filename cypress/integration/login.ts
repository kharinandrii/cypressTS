///<reference types="Cypress" />
/// <reference types="cypress-xpath" />
import fake from 'ts-faker';
describe("Tests block one", () => {
    let text = "An account using this email address has already been registered. Please enter a valid password or request a new one. ";
    it("use registered email", () => {
        cy.visit('/');
        cy.get("a.login").click();
        cy.url().should('include', 'my-account')
        cy.get("#email_create").type("ggdsgsdg@sffs.ios");
        cy.get("#email_create").should("have.attr", "name", "email_create");
        cy.get("#email_create").should("have.value", "ggdsgsdg@sffs.ios");
        cy.get("#SubmitCreate").click();
        cy.get("#create_account_error").should("have.text", text)
    cy.get('form').within(($form) =>{
      cy.get("#email").type("ggdsgsdg@sffs.ios");
      cy.get('#passwd').type('demo1234');
      cy.get('#SubmitLogin').click();
    })
        cy.contains('My account').should('be.visible');
        cy.get('a[title="Home"]').click();
        cy.get('a.blockbestsellers').click();
        cy.get("#blockbestsellers").children().contains("Blouse").click();
       // cy.xpath("//*[@id='blockbestsellers']//*[@title='Blouse' and @class = 'product-name']").should("be.visible").click();
      })
})