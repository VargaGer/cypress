/// <reference types="cypress" />

describe('Ebatta order', () => {
    it('Order pizza', () => {
        cy.viewport('macbook-15')
        cy.visit('http://e-batta.hu/hu/rendeles/')
        cy.EbattaLogin()
        cy.ChoosePizzaType('Pizza')
        cy.ChoosePizzaType('Normál pizzák')
        // Pizza rendelés
        for(let i = 0; i < 2; i++){
            cy.getRandomPizza()
            cy.get('#AddToCart').click()
            // Vásárlás folytatása btn
            cy.get('.nh-button').click()
            cy.go('back')
        }
        // Kosár megnyitása
        cy.OpenBasket()
        // Termék törlése kosárból
        //cy.RemoveItemFromBasket("variálható Vastag Tésztával")
        // Házszám adatok
        //cy.FillOrderDetails()
        cy.CheckBasketPrice()
    })
})