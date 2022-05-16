/// <reference types="cypress" />

describe('Get attribute', () => {

    it('Get attribute', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('prop', 'href').then(property => {
            cy.log(property)
            cy.visit(property)
        })
    })

})
