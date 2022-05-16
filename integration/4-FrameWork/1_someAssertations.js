/// <reference types="cypress" />

describe('Framwork stuff', () => {
    let personData
    
    before(function() {
        cy.fixture('example.json').as('personData').then(data => {
            personData = data
        })
    })

    it.only('Read data from json', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        personData.name.forEach(element => {
            cy.get(':nth-child(1) > .form-control').type(element)
        });
        //cy.get(':nth-child(1) > .form-control').type(personData.name)
        //cy.get('#exampleFormControlSelect1').select(personData.gender)
    })

    it('Validate property', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        // Read from input field
        cy.get(':nth-child(1) > .form-control').type(personData.name)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', personData.name)

        // Read minlength attribute
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2')
        
        // Validate disabled
        cy.get('#inlineRadio3').should('be.disabled')

    })

})
