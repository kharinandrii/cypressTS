///<reference types="Cypress" />
describe("Tests block one", () => {
    it("tooltips test", () => {
        cy.visit('https://demoqa.com/tool-tips');
        cy.get('#toolTipButton').click();
        cy.get('.tooltip-inner').should('have.text', 'You hovered over the Button');
    })
    it.only('dialog window', () => {
        cy.visit('https://demoqa.com/alerts');
        
        const stub = cy.stub();
        cy.on('window:alert', stub)
        cy.get('#alertButton').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('You clicked a button')
        });
    })
})