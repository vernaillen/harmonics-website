/// <reference types="Cypress" />

describe('test trancedance page', () => {
  beforeEach(() => {
    cy.visit('/trancedance/')
    cy.get('#iubenda-cs-banner').should('have.length', 1)
    cy.get('#iubenda-cs-banner button.iubenda-cs-accept-btn').should('have.length', 1)
    cy.get('#iubenda-cs-banner button.iubenda-cs-accept-btn').first().click()
  })

  it('Dutch page has correct content', () => {
    cy.get('main .prose > div').should('have.length', 3)
    cy.get('main .prose > div > h1').should('have.length', 1)
    cy.get('main .prose > div > h1').first().should('have.text', 'Trancedans')

    cy.get('article').should('have.length', 1)
    cy.get('article > div > div > h3').first().should('have.text', 'Geblinddoekte meditatieve vrije dans')
  })
})
