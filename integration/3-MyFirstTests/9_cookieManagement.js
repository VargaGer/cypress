/// <reference types="cypress" />

describe('Basic tests', () => {

    it('Visit login page', () => {
        cy.visit('https://admin2.sensomedia.hu/login')
    })

//     cy.getCookie() yields a cookie object with the following properties:
// domain
// expiry (if specified)
// httpOnly
// name
// path
// sameSite (if specified)
// secure
// value

    it('Login', () => {
        cy.get('#user-name').type('test+ledadmin')
        cy.get('#password').type('Dec2021$!')
        cy.get('#login-user').click()

        // Check if cookie with name senso_admin2 exist
        cy.getCookie('senso_admin2').should('exist')

        // Check if cookie with name senso_admin2, have 'admin2.sensomedia.hu' as 'domain'
        cy.getCookie('senso_admin2').should('have.property', 'domain', 'admin2.sensomedia.hu')

        // More cookie functions
        cy.getCookie('senso_admin2').then((cookie) => {

            cy.log(cookie);
            cy.log(cookie.name);
            expect(cookie.domain).to.equal('admin2.sensomedia.hu');
            expect(cookie.name).to.equal('senso_admin2');
            expect(cookie.httpOnly).to.equal(true);
            expect(cookie.path).to.equal('/');
            expect(cookie).to.not.have.property('expiry');
        })

        // Get value from cookie
        let cookie

        cy.getCookie('senso_admin2').should('exist').then((c) => {
            cookie = c
            cy.log('Auth token is :: ', cookie.value)
        })
    })
})

// some time later, force the "cy.request"
// to run ONLY after the cookie has been set
// by placing it inside ".then"

// cy.get('#submit')
//   .click()
//   .then(() => {
//     cy.request({
//       url: '/api/admin',
//       headers: {
//         'my-token-x': cookie.value,
//       },
//     })
//   })