/// <reference types="cypress"/>
describe("Login Test",()=>
{
    it('should login sucessgully',()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type('admin123{enter}');
        // cy.get('button[type="submit"]').click();
        cy.get('.oxd-userdropdown-name').click();


        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .oxd-userdropdown-link').click();
        //cy.get('.__cypress-selector-playground').click();
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-text').should('contain','OrangeHRM')
        /* ==== End Cypress Studio ==== */
    })
    it('ANother Test',()=>{
        cy.visit('https://parabank.parasoft.com/');
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#loginPanel > :nth-child(2) > a').click();
        cy.get('#firstName').clear('N');
        cy.get('#firstName').type('Neetha');
        cy.get('#lastName').clear();
        cy.get('#lastName').type('Shiv');
        cy.get('#address\\.street').clear();
        cy.get('#address\\.street').type('26 ropery road');
        cy.get('#address\\.city').clear();
        cy.get('#address\\.city').type('Newcastle');
        cy.get('#address\\.state').clear();
        cy.get('#address\\.state').type('Northumberland');
        cy.get('#address\\.zipCode').clear();
        cy.get('#address\\.zipCode').type('NE8 "HP');
        cy.get('#ssn').clear('8');
        cy.get('#ssn').type('888yyyy');
        cy.get('[colspan="2"] > .button').click();
        /* ==== End Cypress Studio ==== */
    })
    
})