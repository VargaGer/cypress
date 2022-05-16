/// <reference types="cypress" />

describe('My very first tests', () => {
    it('TestCaseOne', () => {
        //throw new Error('Whops')
        cy.visit('https://sandbox.sensomedia.hu/amc-admin/')
    })
})