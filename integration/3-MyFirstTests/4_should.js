/// <reference types="cypress" />

describe('Checking text on page', () => {
    it('Check if text is on page', () => {

        cy.visit('https://sandbox.sensomedia.hu/amc-admin/')
        cy.contains('HUNGARIAN FOOD BUSINESS PROGRAM').should('have.text','HUNGARIAN FOOD BUSINESS PROGRAM')
    })
})