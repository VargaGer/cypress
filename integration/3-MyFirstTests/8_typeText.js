/// <reference types="cypress" />

describe('Basic tests', () => {
    it('visitPage', () => {
        cy.visit('https://sandbox.sensomedia.hu/amc-admin/')
    })

    it('Auth test', () => {
        cy.get('[value="LOGIN"]').click()
        cy.get('[name="email"]').type('gergo.varga+ffsupplier@sensomedia.hu')
        cy.contains('#login-user-form', 'The field email is not valid').should('not.exist')
        cy.get('[name="password"]').type('aaaaaaA1')
        cy.contains('#login-user-form', 'The field password is not valid').should('not.exist')

        cy.get('[name="email"]').clear()
        cy.get('[name="password"]').clear()
        cy.contains('#login-user-form','The field email is not valid').should('exist')
        cy.contains('The field password is not valid').should('exist')
    })
})