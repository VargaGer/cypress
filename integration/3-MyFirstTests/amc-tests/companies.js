/// <reference types="cypress" />

describe('Copanies tests', () => {
before(() => {
    cy.viewport('macbook-11')
  })

    beforeEach(() => {
        cy.loginWithSupplier()
        cy.OpenCompaniesPage()
      })
        
    // Company list page functions

    it('Link-letter scroll to company', () => {
        cy.contains('Vanyuscsák Microsoft Edge Bence 2222').should('not.be.inViewport')
        cy.get('#link-letter-V').click()
        cy.contains('Vanyuscsák Microsoft Edge Bence 2222').should('be.inViewport')
    })

    // Search 
    it('Search field check', () => {
        cy.get('div[class="card-deck justify-content-start ms-15"]').find('div[class="card"]').should('have.length', 9)
        cy.get('div[class="card-body"]').find('input:first').should('have.attr', 'placeholder', 'Search')
        .type('vany')
        cy.wait(2000)
        cy.get('div[class="card-deck justify-content-start ms-15"]').find('div[class="card"]').should('have.length', 1)
        cy.get('div[class="card-body"]').find('input:first').should('have.attr', 'placeholder', 'Search').clear()
        cy.wait(2000)
        cy.get('div[class="card-deck justify-content-start ms-15"]').find('div[class="card"]').should('have.length', 9)
    })

    it.only('Search field check dynamic', () => {
        cy.get('div[class="card-deck justify-content-start ms-15"]').find('div[class="card"]').its('length').should('equal', 9)
    })

    it('Search result and link letters', () => {
        cy.get('#link-letter-B').should('not.have.attr', 'disabled')
        cy.get('div[class="card-body"]').find('input:first').should('have.attr', 'placeholder', 'Search')
        .type('green')
        cy.wait(2000)
        cy.get('#link-letter-B').should('have.attr', 'disabled')
        cy.get('div[class="card-body"]').find('input:first').should('have.attr', 'placeholder', 'Search').clear()
        cy.wait(2000)
        cy.get('#link-letter-B').should('not.have.attr', 'disabled')
    })

    it('No result search', () => {
        cy.get('div[class="card-body"]').find('input:first').should('have.attr', 'placeholder', 'Search')
        .type('There is no spoon')
        cy.contains('No company found')
    })

    
    // Categories 
    it('Select existing category by typing text', () => {
        cy.contains('Supplier').click()
        cy.get('.tagify')
        .type('MEAT PRODUCTS{enter}{enter}').type('{enter}')
        cy.get('div[class="card"]').contains('Meat kft.').should('exist')
        cy.get('div[class="card"]').contains('GreenField').should('not.exist')
    })

    it('Select existing category by typing text and search', () => {
        cy.contains('Supplier').click()
        cy.get('.tagify')
        .type('MEAT PRODUCTS{enter}').type('{enter}')
        cy.get('div[class="card-body"]').find('input:first').should('have.attr', 'placeholder', 'Search')
        .type('meat')
        cy.get('div[class="card"]').contains('Meat kft.').should('exist')
        cy.get('div[class="card"]').contains('Naz').should('not.exist')
    })

    it('Select category by mouse clicking', () => {
        cy.contains('Supplier').click()
        cy.get('.tagify').click()
        cy.get('div[class="tagify__dropdown__wrapper"]').contains('BEVERAGES').click()
        cy.get('div[class="card"]').contains('Naz').should('exist')
    })
    
    it('Select category by keyboard arrows', () => {
        cy.contains('Supplier').click()
        cy.get('.tagify').click()
        .type('{downarrow}{downarrow}{enter}')
        cy.get('div[class="card"]').contains('Naz').should('exist')
    })
    
    it('Select category by keyboard type and arrowKey', () => {
        cy.contains('Supplier').click()
        cy.get('.tagify')
        .type('meat{downarrow}{downarrow}{enter}')
        cy.get('div[class="card"]').contains('Naz').should('exist')
    })

    it('Remove category selection by pressing X', () => {
        cy.get('.tagify')
        .type('MEAT PRODUCTS{enter}{enter}').type('{enter}')
        cy.get('.tagify').find('tag[title="MEAT PRODUCTS"]').find('x[class="tagify__tag__removeBtn"]').click()
        cy.get('.tagify').find('tag[title="MEAT PRODUCTS"]').should('not.exist')
    })

    it('Remove category selection by using backspace', () => {
        cy.get('.tagify')
        .type('MEAT PRODUCTS{enter}{enter}').type('{enter}')
        cy.get('.tagify').find('tag[title="MEAT PRODUCTS"]').should('exist')
        cy.get('.tagify')
        .type('{backspace}')
        cy.get('.tagify').find('tag[title="MEAT PRODUCTS"]').should('not.exist')
    })

    it('Check that category removed from selection after selected', () => {
        cy.get('.tagify').click()
        cy.get('div[class="tagify__dropdown__wrapper"]').should('contain', 'MEAT PRODUCTS')
        cy.get('.tagify').click()
        .type('MEAT PRODUCTS{enter}{enter}').type('{enter}')
        cy.get('.tagify').click()
        cy.get('div[class="tagify__dropdown__wrapper"]').should('not.contain', 'MEAT PRODUCTS')
    })

    it('Category and link letters', () => {
        cy.contains('Supplier').click()
        cy.get('#link-letter-E').should('not.have.attr', 'disabled')
        cy.get('.tagify').click()
        .type('MEAT PRODUCTS{enter}{enter}').type('{enter}')
        cy.get('#link-letter-E').should('have.attr', 'disabled')
    })


    // Company cards
    it('Validate Company type In List View', () => {
        cy.get('#link-letter-V').click()
        cy.get('div[class="card"]').contains('V_MayFly').parent('div').contains('Supplier')
    })

    it('Open company page', () => {
        cy.get('#link-letter-V').click()
        cy.get('div[class="card"]').contains('Vanyuscsák Microsoft Edge Bence 2222').parent().children().parent().click()
        cy.url().should('include', 'amc-admin/partners/view/')
    })

    // Generate catalogue and checkBox

    it('Validate generate catalogue btn disabled or not', () => {
        cy.contains('Generate catalogue').should('be.disabled')
        cy.get('#partner-select-all-container').find('label[class="catalog-header align-top"]').click( {force: true} )
        cy.get('#partner-select-all-container').find('label[class="catalog-header align-top"]').click( {force: true} )
        cy.contains('Generate catalogue').should('not.be.disabled')
    })

    it('Validate generate catalogue ALL partners', () => {
        cy.get('#partner-select-all-container').find('label[class="catalog-header align-top"]').click( {force: true} )
        cy.get('#partner-select-all-container').find('label[class="catalog-header align-top"]').click( {force: true} )
        cy.get('#catalog-pdf').should('contain', 'Generate catalogue (9)')
    })

    it('Validate generate catalogue selected partners', () => {
        cy.get('#link-letter-G').click()
        cy.get('div[class="card"]').contains('GreenField').parent().parent().find('input[type="checkbox"]').check( {force: true} )
        cy.get('#catalog-pdf').should('contain', 'Generate catalogue (1)')
        cy.get('div[class="card"]').contains('Sausage factory').parent().parent().find('input[type="checkbox"]').check( {force: true} )
        cy.get('#catalog-pdf').should('contain', 'Generate catalogue (2)')
        cy.get('div[class="card"]').contains('Sausage factory').parent().parent().find('input[type="checkbox"]').uncheck( {force: true} )
        cy.get('#catalog-pdf').should('contain', 'Generate catalogue (1)')
        cy.get('div[class="card"]').contains('GreenField').parent().parent().find('input[type="checkbox"]').uncheck( {force: true} )
        cy.contains('Generate catalogue').should('be.disabled')
    })

    // Company data page validatons

    it('Back btn from company page', () => {
        cy.get('#link-letter-G').click()
        cy.get('div[class="card"]').contains('GreenField').parent().children().invoke('removeAttr', 'target').parent().click()
        cy.url().should('include', '/amc-admin/partners/view/102')
        cy.contains('Back').click()
        cy.url().should('include', '/amc-admin/partners')
    })

    // Company info
    it('Company info page url check', () => {
        cy.get('#link-letter-G').click()
        cy.get('div[class="card"]').contains('GreenField').parent().children().invoke('removeAttr', 'target').parent().click()
        cy.contains('Company info').click()
        cy.url().should('include', '/amc-admin/partners/view/company/102')
    })
    
    
    // Contact person
    it('Contact person info page url check', () => {
        cy.get('#link-letter-G').click()
        cy.get('div[class="card"]').contains('GreenField').parent().children().invoke('removeAttr', 'target').parent().click()
        cy.contains('Contact person').click()
        cy.url().should('include', '/amc-admin/partners/view/account/102')
    })
    
    // Target countries
    it('Target countries page url check', () => {
        cy.get('#link-letter-G').click()
        cy.get('div[class="card"]').contains('GreenField').parent().children().invoke('removeAttr', 'target').parent().click()
        cy.contains('Target countries').click()
        cy.url().should('include', '/amc-admin/partners/view/countries/102')
    })


})