/// <reference types="cypress" />

describe('Basic tests', () => {
    it('Load base page', () => {
        cy.visit('https://sandbox.sensomedia.hu/amc-admin/')
    })

    it('Login page looks good', () => {
        cy.get('[value="LOGIN"]').click()
        cy.contains('Forgot my password').should('exist')
        cy.contains('Back to the Welcome page').should('exist')
        cy.contains('EVENTS').should('exist')
        cy.contains('NEWS & ARTICLES').should('exist')
        cy.contains('ABOUT').should('exist')
        cy.contains('Login').should('exist')

    })
})