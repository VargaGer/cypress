/// <reference types="cypress" />

describe('Basic tests', () => {
    it('visitPage', () => {
        cy.visit('https://sandbox.sensomedia.hu/amc-admin/')
    })

    it('pause', () => {
        cy.contains('Back to the Welcome page', {timeout: 1000}).should('exist')
        cy.get('#login-user').click()
    })
})