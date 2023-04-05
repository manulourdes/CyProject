/// <reference types="cypress" />

describe('My first test in cypress', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
})
    it('Locked out user', ()=>{
        cy.get('#user-nameee').type('locked_out_user')
        cy.get(':Password').type('secret_sauce{Enter}')
        cy.get('.error-message-container').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it('Successful login', ()=>{
        cy.get('input[placeholder="Username"]').type('standard_user')
        cy.get('input[name="password"]').type('secret_sauce')
        //cy.get('.submit-button').click()
        cy.contains("Login").click()
        cy.get('.title').should('have.text', 'Products')
    })
})