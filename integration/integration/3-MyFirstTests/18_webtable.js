/// <reference types="cypress" />

describe('Webtable practice', () => {

    it('Read from table 1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#product').contains('Master Selenium Automation in simple Python Language').parent().contains('25')
    })

    it.only('Read from table 2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})
