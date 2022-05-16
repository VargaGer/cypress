/// <reference types="cypress" />

describe('Login tests', () => {
    before(() => {
        cy.visit('https://sandbox.sensomedia.hu/amc-admin/')
        cy.get('[value="LOGIN"]').click()
      })
    
    // Validating buttons and links
    
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
        cy.get('a').should('have.attr', 'href', '/amc-admin/home')
    })

    it('Validate login btn visible', () => {
        cy.get('#login-user').should('exist')
    })

    it('Validate forgot password link', () => {
        cy.contains('Forgot my password').should('have.attr', 'href', '/amc-admin/forgot-password')
    })

    it('Validate back to welcome screen link', () => {
        cy.contains('Back to the Welcome page').should('have.attr', 'href', '/amc-admin/')
    })

    // Validate alert msgs

    it('Validate error msgs are not visible', () => {
        cy.get('div[data-field="email"]').should('not.exist')
        cy.get('div[data-field="password"]').should('not.exist')
    })

    it('Validate big alert, all inputs are empty alert msg', () => {
        cy.get('#login-user').click()
        cy.get('.alert').contains('Required field: Email address').contains('Required field: Password')
        cy.get('button[type="button"]').click()
        cy.get('.alert').should('not.exist')
    })

    it('Validate email form alerts', () => {
        cy.get('input[name="email"]').type('1337')
        cy.get('div[data-field="email"]').contains('The field email is not valid')
        cy.get('input[name="email"]').clear()
        cy.get('input[name="email"]').type('1337@')
        cy.get('div[data-field="email"]').contains('The field email is not valid')
        cy.get('input[name="email"]').clear()
        cy.get('input[name="email"]').type('1337@leet.')
        cy.get('div[data-field="email"]').contains('The field email is not valid')
        cy.get('input[name="email"]').clear()
        cy.get('input[name="email"]').type('1337@leet.io')
        cy.get('div[data-field="email"]').should('not.exist')
    })

    it('Validate password form alerts', () => {
        cy.get('input[name="password"]').type('1234').clear()
        cy.get('div[data-field="password"]').contains('The field password is not valid')
    })

    it('Validate missing password alert', () => {
        cy.get('input[name="email"]').type('1337@leet.io')
        cy.get('input[name="password"]').clear().type('{enter}')
        cy.get('.alert').contains('Required field: Password')
        cy.get('button[type="button"]').click()
        cy.get('.alert').should('not.exist')
        cy.get('input[name="email"]').clear()
    })

    it('Validate missing email alert', () => {
        cy.get('input[name="password"]').type('1234').type('{enter}')
        cy.get('.alert').contains('Required field: Email address')
        cy.get('button[type="button"]').click()
        cy.get('.alert').should('not.exist')
        cy.get('input[name="password"]').clear()
    })

    it('Validate wrong email/pw alert', () => {
        cy.get('input[name="email"]').type('1337@leet.io')
        cy.get('input[name="password"]').type('1234')
        cy.get('#login-user').click()
        cy.get('.alert').contains('Invalid username or password.')
        cy.get('input[name="email"]').clear()
        cy.get('input[name="password"]').clear()
        cy.get('button[type="button"]').click()
        cy.get('.alert').should('not.exist')
    })

    // Validate successfull login

    it('Validate successful login', () => {
        cy.get('input[name="email"]').type('gergo.varga+ffsupplier@sensomedia.hu')
        cy.get('input[name="password"]').type('aaaaaaA1{enter}')
        cy.url().should('eq', 'https://sandbox.sensomedia.hu/amc-admin/about')
        cy.get('.title').should('contain', 'Welcome to the Hungarian Food Business Program')
    })
})