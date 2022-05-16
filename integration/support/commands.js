// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginWithSupplier', () => {
    cy.visit('https://sandbox.sensomedia.hu/amc-admin/')
    cy.get('[value="LOGIN"]').click()
    cy.get('input[name="email"]').type('gergo.varga+ffsupplier@sensomedia.hu')
    cy.get('input[name="password"]').type('aaaaaaA1{enter}')
    cy.url().should('eq', 'https://sandbox.sensomedia.hu/amc-admin/about')
    cy.get('.title').should('contain', 'Welcome to the Hungarian Food Business Program')
})

Cypress.Commands.add('OpenCompaniesPage', () => {
    cy.contains('COMPANIES').click()
})

Cypress.Commands.add('OpenPRODUCTSPage', () => {
    cy.contains('PRODUCTS').click()
})

// --------------------------------------         BKK stuff         -------------------------------------- 

Cypress.Commands.add('LoginBKK', () => {
    cy.visit('http://34.141.96.76/login')
    cy.get('#input-21').type('bkkadmin@sensomediagroup.com')
    cy.get('#password').type('bkkadmin')
    cy.get('button[type=submit]').click()
})

Cypress.Commands.add('OpenTicketsMenu', () => {
    cy.get('.v-app-bar__nav-icon').click()
    cy.get(':nth-child(4) > .v-list-item').click()
    cy.get('.v-select__slot').click()
    cy.get('#list-item-567-3').click()
})

Cypress.Commands.add('OpenTicketByName', (name) => {
    cy.get('tbody tr').each(($el, index, $list) => {
        const ticketName = $el.text()
        if(ticketName.includes(name)) {
            cy.get(".d-flex button:nth-child(2)").eq(index).click()
        }
    })
})

Cypress.Commands.add('clickModifyTicket', () => {
    cy.get('.col > .v-sheet > .v-toolbar__content > :nth-child(4)').click()
})

Cypress.Commands.add('AddLanguage', (lang) => {
    cy.get(':nth-child(2) > .col > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click()
    
})

// --------------------------------------         Ebattás         -------------------------------------- 
Cypress.Commands.add('getRandomPizza', () => {
    cy.get('.grid-uniform .grid__item').then(listing => 
        {
            const listLenght = Cypress.$(listing).length
            cy.log('Pizzák száma :: ' + listLenght + '.db')
            const randomPizza = Math.floor(Math.random() * listLenght + 1)
            cy.log('Random pizza ID :: ' + randomPizza)
            cy.get('.products-grid-view > ul > :nth-child(' + randomPizza + ') .product-container').click()
        })
            cy.get('.product_single_detail_section h2').then($pizzaName => 
            {
                let pizzaName = $pizzaName.text()
                if(pizzaName.includes('variálható')) {
                    cy.go('back')
                    cy.getRandomPizza()
                }
                else
                    cy.log('Selected pizza :: ' + pizzaName)
            })
})

Cypress.Commands.add('EbattaLogin', () => {
    cy.get('.tooltipo > .fa').click()
    cy.get('#input-mail').type('ger01@freemail.hu')
    cy.get('#input-pass').type('Vercetty02')
    cy.get('#readcookie').click()
    cy.get('.col-md-4 > .btn').click()
})

Cypress.Commands.add('ChoosePizzaType', (pizzaType) => {
    cy.get('#mfilter-content-container .product-layout .product-thumb .caption .name a').each(($element, index, $list) => {
        if($element.text()===pizzaType)
        {
            cy.wrap($element).click()
        }
    })
})

Cypress.Commands.add('OpenBasket', () => {
    cy.get('[style="margin-top:5px;"] > .box-cart > .cart > .toggle > .fa').click()
    cy.contains('Kosár').click()
})

Cypress.Commands.add('FillOrderDetails', () => {
    cy.get('#city_id').select('Százhalombatta')
    cy.get('#select2-street_id-container').click()
    cy.get('.select2-search__field').type('Arany{enter}')
    cy.get('.col-sm-10 > input').check()
    cy.get('#pay_id').select(1)
})

Cypress.Commands.add('RemoveItemFromBasket', (itemName) => {
    cy.get('#cartbucket .text-left').each(($element, index, $list) => {
        if($element.text() === "variálható Vastag Tésztával")
        {
            cy.get(':nth-child(' + index + 1 + ') > [style="width: 0"] > .cart-remove-btn > .fa').click()
        }
    })

})

Cypress.Commands.add('CheckBasketPrice', () => {
    var sum = 0
    cy.get('#cartbucket tr .text-center .price:nth-child(1)').each(($element, index, $list) => {
        const actualText = $element.text()
        // Ketté bontja egy tömbben a szöveget a szóköznél
        var formattedPrice = actualText.split(" ")
        // Szóköz utáni részt levágja (0. indexű elemet tartom meg)
        formattedPrice = formattedPrice[0].trim()
        var removedDotPrice = parseInt(formattedPrice.replace('.', ''))
        sum = sum + removedDotPrice
        cy.log("SUM :: " + sum)
    cy.get("#cart_total table tr:nth-child(2) td:nth-child(2)").then((element) => {
        const totalPrice = element.text()
        // Ketté bontja egy tömbben a szöveget a szóköznél
        var formattedPrice = totalPrice.split(" ")
        // Szóköz utáni részt levágja
        formattedPrice = formattedPrice[0].trim()
        var removedDotTotelPrice = parseInt(formattedPrice.replace('.', ''))
        cy.log("Nincs pont total price:: " + removedDotTotelPrice)
        expect(removedDotTotelPrice).to.equal(sum)
    })
})
})

// --------------------------------------         Udemy learn         -------------------------------------- 
Cypress.Commands.add('addItemToCart', (itemName) => {
    cy.get('h4.card-title').each(($element, index, $list) => {
        if($element.text().includes(itemName))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })
})

