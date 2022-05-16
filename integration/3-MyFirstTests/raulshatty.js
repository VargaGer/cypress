/// <reference types="cypress" />

describe('My test', () => {

    it('Rauls page', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($element, index, $list) => {
            if($element==="India")
            {
                cy.wrap($element).click()
            }
        })
    })

})

