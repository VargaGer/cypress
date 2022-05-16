/// <reference types="cypress" />

describe('Product tests', () => {
    before(() => {
        cy.visit('https://sandbox.sensomedia.hu/amc-admin/')
      })
        
    it('Validate welcome screen text', () => {
        cy.contains('h1', 'HUNGARIAN FOOD BUSINESS PROGRAM')
    })

    it('Validate events btn link', () => {
        cy.contains('EVENTS').should('have.attr', 'href', '/amc-admin/events')
    })

    it('Validate news & articles btn link', () => {
        cy.contains('NEWS & ARTICLES').should('have.attr', 'href', '/amc-admin/articles')
    })
    
    it('Validate about btn link', () => {
        cy.contains('ABOUT').should('have.attr', 'href', '/amc-admin/about')
    })

    it('Validate header logo link', () => {
        cy.get('a').should('have.attr', 'href', '"/amc-admin/home')
    })

    it('Validate login btn link', () => {
        cy.get('input[value="LOGIN"]').should('have.attr', 'onclick', 'location.href=\'/amc-admin/login\'')
    })

    it('Validate register btn link', () => {
        cy.get('input[value="REGISTRATION"]').should('have.attr', 'onclick', 'location.href=\'/amc-admin/registration-wizard\'')
    })
})