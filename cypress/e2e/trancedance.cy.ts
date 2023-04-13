/// <reference types="Cypress" />

describe('test trancedance page', () => {
  beforeEach(() => {
    cy.visit('/trancedance/')
  })

  it('Dutch page has correct content', () => {
    cy.get('main .prose > div').should('have.length', 3)
    cy.get('main .prose > div > h1').should('have.length', 1)
    cy.get('main .prose > div > h1').first().should('have.text', 'Trancedans')

    cy.get('article').should('have.length', 1)
    cy.get('article > div > div > h3').first().should('have.text', 'Geblinddoekte meditatieve vrije dans')
  })

  it('English page has correct content', () => {
    cy.get('header .languageSwitcher').should('have.length', 1)
    cy.get('header .languageSwitcher a').should('have.length', 2)
    cy.get('header .languageSwitcher a').last().click()
    cy.location().should((location) => {
      expect(location.pathname).contains('/en/trancedance')
    })
    cy.get('main .prose > div').should('have.length', 3)
    cy.get('main .prose > div > h1').should('have.length', 1)
    cy.get('main .prose > div > h1').first().should('have.text', 'Trance Dance')

    cy.get('article').should('have.length', 1)
    cy.get('article > div > div > h3').first().should('have.text', 'Blindfolded meditative free dance')
  })
})
