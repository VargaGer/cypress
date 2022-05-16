/* 
cypress.json-be lehet beírni a környezeti változókat sub-json-ként.
Így:

{
  "scrollBehavior": "center",
  "env": {
    "testURL": "www.wwwcomcom.com"
  }
}
*/
/// <reference types="cypress" />

describe('EnvironmentVariables', () => {
it('Visit website', () => {
    cy.visit(Cypress.env('testURL'))
    })
})

it.only('Visit website 2', () => {
    cy.visit(Cypress.env('testURL') + "/prints/")

})







