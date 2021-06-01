export class LoginPage{
   
   static loginInSystem(){
        cy.get("a.login").click();
        cy.get('form').within(($form) =>{
          cy.get("#email").type("ggdsgsdg@sffs.ios");
          cy.get('#passwd').type('demo1234');
          cy.get('#SubmitLogin').click();
        })
    }

}
export const onLoginPage = LoginPage