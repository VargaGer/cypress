
/// <reference types="cypress" />

describe('Copanies tests', () => {
    before(() => {
        cy.visit('https://sandbox.sensomedia.hu/amc-admin/')
      })
        
    it('Compare two texts from different elements', () => {
        cy.get('.landing-page-info').then(($btn1) => {
            const btn1Text = $btn1.text()
            cy.get('#landing-page > :nth-child(6)').then(($btn2) => {
                const btn2Text = $btn2.text()
                expect(btn1Text).not.to.eq(btn2Text)
            })
        })
    })
})