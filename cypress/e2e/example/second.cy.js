/// <reference types="cypress" />
const loginPage = require("../../Pages/login")

describe('My first test in cypress', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
})
    it('Locked out user', ()=>{
        loginPage.typeLockedUsername()
        loginPage.typePwd()
        loginPage.clickNext()
        cy.get('.error-message-container').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it('Successful login', ()=>{
        loginPage.typeCorrectUsername()
        loginPage.typePwd()
        loginPage.clickNext()
        cy.get('.title').should('have.text', 'Products')
    })
})