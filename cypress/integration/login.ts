///<reference types="Cypress" />
/// <reference types="cypress-xpath" />
import fake from 'ts-faker';
describe("Tests block one", () => {
    let text = "An account using this email address has already been registered. Please enter a valid password or request a new one. ";
    let  totalProd;
    let totalShipping;
    let totalTax;
    let totalPrice;
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
      cy.get('#total_product').invoke('text') .then(text => {
        const someText = text;
         totalProd = someText.slice(1)
      })
      cy.get('#total_shipping').invoke('text') .then(text => {
        const someText = text;
        totalShipping = someText.slice(1)
      })
      cy.get('#total_tax').invoke('text') .then(text => {
        const someText = text;
        totalTax = someText.slice(1)
      })
      cy.get('#total_price').invoke('text') .then(text => {
        const someText = text;
        totalPrice = someText.slice(1)
      //  let summPrice = totalProd + totalShipping + totalTax
      })
      
      })
      //дописать проверку того сколько товара в корзине а так же проверку того сколько получается товара по цене
})