///<reference types="Cypress" />
/// <reference types="cypress-xpath" />
import fake from 'ts-faker';
describe("Tests block one", () => {
    beforeEach('open app', ()=>{
        cy.visit('/');
    })
})