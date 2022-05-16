/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

// Fel kell telepíteni terminalból: npm install -D cypress-iframe
// /// <reference types="cypress-iframe" />
// import 'cypress-iframe'


describe('Get attribute', () => {

    it('Get attribute', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find('.pricing-title').should('have.length', 2)
    })
})
