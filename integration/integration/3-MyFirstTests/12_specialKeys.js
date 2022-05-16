/// <reference types="cypress" />

describe('Basic tests', () => {
    it('visitPage', () => {
        cy.visit('https://codedamn.com/playground/qWiB95pRVMhUyylGp2WiC')
    })

    it('Terminal stuff', () => {
        cy.contains('Establishing', {timeout: 2000}).should('exist')
        cy.contains('script.js', {timeout: 20000}).should('exist')
        cy.get('[class="terminal xterm"]')
        .type('{ctrl}{c}')
        .type('touch Yeah.js{enter}')
        cy.contains('Yeah.js').should('exist')
    })
})