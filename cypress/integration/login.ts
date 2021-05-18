///<reference types="Cypress" />
/// <reference types="cypress-xpath" />
import fake from 'ts-faker';
describe("Tests block one", () => {
    let text = "An account using this email address has already been registered. Please enter a valid password or request a new one. ";
    let  totalProd: string;
    let totalShipping: string;
    let totalTax: string;
    let totalPrice: string;
    let  summPrice: number;
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
        
       cy.get('#quantity_wanted').invoke('val') .then(text => {
        const someText = text;
        if(Number(someText) == 1){
          cy.contains('Add to cart').click();
        }if(Number(someText) < 1){
          cy.get('.icon-plus').click();
          cy.contains('Add to cart').click();
        }if(Number(someText) > 1){
          cy.get('.icon-minus').click();
          cy.contains('Add to cart').click();
        }
      });
      cy.get('[title = "Proceed to checkout"]').click();
      cy.get('#cart_title').should('contains.text', 'Shopping-cart summary');
      cy.get('#total_product').invoke('text').then(text => {
        const someText = text;
         totalProd = someText.slice(1);
      })
      cy.get('#total_shipping').invoke('text').then(text => {
        const someText = text;
        totalShipping = someText.slice(1);
      })
      cy.get('#total_tax').invoke('text').then(text => {
        const someText = text;
        totalTax = someText.slice(1);
      })
      cy.get('#total_price').invoke('text').then(text => {
        const someText = text;
        totalPrice = someText.slice(1);
        summPrice = Number(totalProd) + Number(totalShipping) + Number(totalTax)
        if(Number(totalPrice) == summPrice){
          cy.get('.cart_navigation').children('[title="Proceed to checkout"]').click();
      }
      })
      cy.get('[name="processAddress"]').click();
      cy.get('[name="processCarrier"]').click();
      cy.get('.fancybox-error').should('have.text', 'You must agree to the terms of service before continuing.');
      cy.get('[title="Close"]').click();
      cy.get('#cgv').click();
      cy.get('[name="processCarrier"]').click();
      cy.get('[title="Pay by bank wire"]').click();
      cy.contains('I confirm my order').click();
      cy.get('button').contains('I confirm my order').click();
      cy.get('[title="Return to Home"]').click();
      })
})



