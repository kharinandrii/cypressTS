///<reference types="Cypress" />
describe("Tests block one", () => {
    it("datapicker test", () => {
        cy.visit("https://demoqa.com/date-picker");

        let date = new Date();
        console.log(date.setDate(date.getDate() + 7));
        let futureDay = date.getDay();
        let futureMonth = date.toLocaleString('default', {month: '2-digit'});
        console.log(futureDay)
        console.log(futureMonth)
        cy.get('#datePickerMonthYearInput').invoke('attr', 'value').then( dateInputAttr =>{
            cy.get('#datePickerMonthYearInput').click()
            if(!dateInputAttr?.includes(futureMonth)){
                cy.get('[aria-label="Next Month"]').click();
                cy.get('.react-datepicker__month').contains(futureDay).click();
            }else{
                cy.get('.react-datepicker__month').contains(futureDay).click();
            }
        })
        
//продолжить с видео по датапикер 
    })
})