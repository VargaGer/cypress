/// <reference types="cypress" />

describe('Basic tests', () => {
    it('visitPage', () => {
        cy.visit('https://sandbox.sensomedia.hu/amc-admin/')
    })

    it('pause', () => {
        cy.get('[value="LOGIN"]').click()
        cy.get('[name="email"]').type('gergo.varga+ffsupplier@sensomedia.hu')
        cy.get('[name="password"]').type('aaaaaaA1')
        cy.pause()
        cy.debug()
        cy.get('#login-user').click()
    })
})