/// <reference types="cypress" />

describe('Product tests', () => {
    let productData
    
    before(() => {
        cy.fixture('productData.json').as('productData').then((data) => {
            productData = data
        })
        cy.loginWithSupplier()
        cy.OpenPRODUCTSPage()
      })

    // Product category page functions

    it('Check product count number dynamically', () => {
        cy.get('#BAKERY-count').then(($productCount) => {
            const productCount = $productCount.text()
            cy.log('Bakery count is :: ', {productCount})
            cy.contains('BAKERY').click()
            cy.get('.card-deck').find('.card').should('have.length', productCount)
        })
    })

    it('Subcategory foldable block check', () => {
        cy.contains('BAKERY').parent().parent().find('.foldable').should('have.css', 'display', 'none')
        cy.contains('BAKERY').parent().parent().find('.fold-arrow').click()
        cy.contains('BAKERY').parent().parent().find('.foldable').should('have.css', 'display', 'block')
        cy.contains('BAKERY').parent().parent().find('.fold-arrow').click()
        cy.contains('BAKERY').parent().parent().find('.foldable').should('have.css', 'display', 'none')
        })

    // Product tests

    it.only('Add new product', () => {
        cy.contains('My products').click('bottom')
        cy.contains('Add new product').click()
        cy.get('input[name="name"]').type(productData.ProductName)
        cy.contains('Categories').parent().find('.col-lg-9').click()
            .get('div[class="tagify__dropdown__wrapper"]').contains(productData.Categories).click()
        cy.contains('Subcategories').parent().find('.col-lg-9').click()
            .get('div[class="tagify__dropdown__wrapper"]').contains(productData.Subcategories).click()
        cy.contains('Certificates').parent().find('.col-lg-9').click()
            .get('div[class="tagify__dropdown__wrapper"]').contains(productData.Certificates).click()
        cy.get('input[name="quantity"]').type(productData.Quantity)
        cy.contains('Quantity').parent().find('.select2')
        })
    })
