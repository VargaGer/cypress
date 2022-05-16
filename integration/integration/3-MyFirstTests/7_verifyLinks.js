/// <reference types="cypress" />

describe('Basic tests', () => {
    it('Load base page', () => {
        cy.visit('https://sandbox.sensomedia.hu/amc-admin/')
    })

    it('Login page looks good', () => {
        cy.get('[value="LOGIN"]').click()
        cy.viewport('iphone-7')
        cy.log('Clicking on forgot password')
        cy.contains('Forgot my password').click()
        cy.url().should('not.throw')
        cy.go('back')

        cy.contains('Back to the Welcome page').click()
        cy.url().should('eq', 'https://sandbox.sensomedia.hu/amc-admin/')
    })
})