///<reference types="Cypress" />
/// <reference types="cypress-xpath" />
import fake from 'ts-faker';
describe("Tests block one", () => {
    it('Check history table', () =>{
        cy.visit('/');
        cy.get("a.login").click();
    cy.get('form').within(($form) =>{
      cy.get("#email").type("ggdsgsdg@sffs.ios");
      cy.get('#passwd').type('demo1234');
      cy.get('#SubmitLogin').click();
    })
      cy.get('.myaccount-link-list>li').eq(0).children().click();
      cy.get('tbody').find('tr.first_item').then( firstItem =>{
          cy.wrap(firstItem).find('.history_price').should('contain','30.16');
          cy.wrap(firstItem).find('.history_state').should('contain', 'On backorder');
          cy.wrap(firstItem).find('.history_state').children().should('have.css', 'background-color', 'rgb(255, 105, 180)')
          
          
      });
    })
})