/// <reference types="cypress" />

describe('Update tickets', () => {
    let ticketData
    
    before(() => {
        cy.visit('http://34.141.96.76/')
        cy.fixture('productData.json').as('productData').then((data) => {
            ticketData = data
        })
      })

    it('Add language', () => {
        cy.LoginBKK()
        cy.OpenTicketsMenu()
        cy.OpenTicketByName("ryzen")
        cy.clickModifyTicket()
        cy.AddLanguage()
    })
})
