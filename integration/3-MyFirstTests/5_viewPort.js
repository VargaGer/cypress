/// <reference types="cypress" />

describe('Checking text on page', () => {
    it('Check if text is on page', () => {

        cy.viewport('iphone-7')
        cy.visit('https://sandbox.sensomedia.hu/amc-admin/')
    })
})