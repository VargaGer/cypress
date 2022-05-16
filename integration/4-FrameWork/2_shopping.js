/// <reference types="cypress" />

describe('Shopping', () => {
    let productData
    
    before(function() {
        cy.fixture('itemData.json').as('productData').then(data => {
            productData = data
        })
    })
    
    it('Add item to cart', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
        productData.ProductName.forEach(element => {
            cy.addItemToCart(element)
        })
    })
})
