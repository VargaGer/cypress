/// <reference types="cypress" />
import HomePage from '../pageOpjects/homePage'

describe('PageObjects leaen', () => {

    it.only('Use of pageObjects', () => {
        const homePage = new HomePage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getEditBox().type('yeah')
        
    })

})