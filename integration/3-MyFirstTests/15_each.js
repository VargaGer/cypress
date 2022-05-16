/// <reference types="cypress" />

describe('Product tests', () => {
    before(() => {
        cy.visit('https://sandbox.sensomedia.hu/amc-admin/')
        cy.loginWithSupplier()
      })


    it.only('Menu select with each', () => {
        cy.get('#nav-bar li').each(($element, index, $list) => {
            if($element.text()==="EVENTS")
            {
                cy.log("text found ")
                cy.wrap($element).click()
            }
        })
    })

    it('Add new product', () => {
        cy.OpenPRODUCTSPage()
        cy.contains('My products').click('bottom')
        cy.contains('Add new product').click()
        cy.contains('Categories').parent().find('.col-lg-9').click()
        cy.log("Clicked")
        cy.get('.tagify__dropdown__wrapper div').each(($el, index, $list) => {
            if($el.text()==="FROZEN FOOD")
                {
                    $el.click()
                }
            }
        )})
    })
