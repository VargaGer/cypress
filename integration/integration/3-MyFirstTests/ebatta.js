/// <reference types="cypress" />

describe('Ebatta order', () => {
    it('Order pizza', () => {
        cy.viewport('macbook-15')
        cy.visit('http://e-batta.hu/hu/rendeles/')
        cy.EbattaLogin()

        // Pizza rendelés
        for(let i = 0; i < 3; i++){
            cy.ChoosePizzaType('Pizza')
            cy.ChoosePizzaType('Normál pizzák')
            cy.get('.grid-uniform .grid__item').then(listing => {
                const listLenght = Cypress.$(listing).length
                cy.log('Pizzák száma :: ' + listLenght + '.db')
                const randomPizza = Math.floor(Math.random() * listLenght + 1)
                cy.log('Random pizza ID :: ' + randomPizza)
                cy.get('.products-grid-view > ul > :nth-child(' + randomPizza + ') .product-container').click()
                //cy.get('.products-grid-view > ul > :nth-child(28) .product-container').click()
            })
            cy.get('.product_single_detail_section h2').then($pizzaName => {
                const name = $pizzaName.text()
                cy.log('Selected pizza :: ' + name)
            })
            cy.get('#AddToCart').click()
            cy.get('.nh-button').click()
            cy.get('#menu-menu-1 > :nth-child(1) > a').click()
        }

        // Kosár megnyitása
        cy.OpenBasket()

        // Termék törlése kosárból
        cy.RemoveItemFromBasket("variálható Vastag Tésztával")

        // Házszám adatok
        cy.FillOrderDetails()
    })
})