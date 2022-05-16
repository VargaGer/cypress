/// <reference types="cypress" />

describe('Checking text on page', () => {
    it('Check if text is on page', () => {

        cy.visit('https://sandbox.sensomedia.hu/amc-admin/')
        cy.contains('Online').should('exist')
    })
})