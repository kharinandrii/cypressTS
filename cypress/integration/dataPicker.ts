///<reference types="Cypress" />
describe("Tests block one", () => {
    it("datapicker test", () => {


        function selectDayFromCurrent(){
            let date = new Date();
            date.setDate(date.getDate() + 29);
             let futureDay = date.getDate();
             console.log(futureDay)
             let futureMonth = date.toLocaleString('default', {month: 'long'});
             let assertDate:string;
             assertDate =  date.toLocaleString('default', {month: '2-digit'}) + '/' + date.toLocaleString('default', {day: '2-digit'}) + '/' + date.getFullYear();
            cy.get('.react-datepicker__current-month').invoke('text').then( dateInputAttr =>{
                
            if(!dateInputAttr?.includes(futureMonth)){
                cy.get('[aria-label="Next Month"]').click();
                selectDayFromCurrent()
            }else{
                cy.get(`[class=\'react-datepicker__day react-datepicker__day--0${date.toLocaleString('default', {day: '2-digit'})}\']`)
                .then(listing => {
                    const listingCount = Cypress.$(listing).length;
                    console.log(listingCount)
                    if(listingCount>2){
                        cy.wrap(listing).eq(2).click();
                    }else{
                        cy.wrap(listing).click({ multiple: true });
                    }
                })
        }
        
    })
    return assertDate;
}

        cy.visit("https://demoqa.com/date-picker");

       
        cy.get('#datePickerMonthYearInput').click()
       let assertDate = selectDayFromCurrent();
        
        cy.get('#datePickerMonthYearInput').invoke('attr', 'value').should('contain', assertDate);
//продолжить с видео по датапикер 
    
    
})
})
