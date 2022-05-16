/// <reference types="cypress" />

describe('My test', () => {

    it('Browser tab handling', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'index')
        cy.go('back')
        cy.url().should('include', 'Practice')
        cy.go('forward')
    })
})
