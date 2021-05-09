///<reference types="Cypress" />
/// <reference types="cypress-xpath" />
import fake from 'ts-faker';
describe("Tests block one", () => {
    it.only("user login", function() {
        cy.visit('http://automationpractice.com/index.php');
    cy.get("a.login").click();
    cy.get('form').within(($form) =>{
      cy.get("#email").type("ggdsgsdg@sffs.ios");
      cy.get('#passwd').type('demo1234');
      cy.get('#SubmitLogin').click();
    })
        cy.get('#contact-link').children('a').click();
        cy.get('form').within(($form) =>{
          cy.get('#id_contact').select('2');
          cy.get('#email').should("have.value", "ggdsgsdg@sffs.ios");
          cy.get('#submitMessage').click();
        })
        cy.get('.alert-danger>p').should('have.text', 'There is 1 error');
        cy.get('ol').children().should('have.text', 'The message cannot be blank.');
        cy.get('form').within(($form) =>{
          cy.get('#id_contact').select('2');
          cy.get('#email').should("have.value", "ggdsgsdg@sffs.ios");
          cy.get('#message').type('hello world');
          cy.get('#submitMessage').click();
        })
        cy.get('p.alert-success').should('have.text', 'Your message has been successfully sent to our team.')
      })
})