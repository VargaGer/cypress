/// <reference types="cypress" />

describe('Basic tests', () => {
    
    it('visitPage', () => {
        cy.visit('https://codedamn.com/playground/qWiB95pRVMhUyylGp2WiC')
    })

    it('Terminal stuff', () => {
        cy.contains('Welcome to codedamn', {timeout: 20000}).should('exist')
        cy.contains('script.js').rightclick()
        cy.contains('Rename File').click()
        cy.contains('script.js').type('NewEpicFile.js')
    })
})