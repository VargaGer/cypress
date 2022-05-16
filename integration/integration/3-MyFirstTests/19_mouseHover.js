/// <reference types="cypress" />

describe('Webtable practice', () => {

    it('Read from table 1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // Csak akkor működik a show, ha a közvetlen gyerekei vannak hide-olva
        cy.get('.mouse-hover-content').invoke('show').click()
    })

})
