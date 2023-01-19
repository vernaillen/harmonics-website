/// <reference types="Cypress" />

describe('test thanks page', () => {
  beforeEach(() => {
    cy.visit('/thanks/')
  })

  it('Dutch page has correct content', () => {
    cy.get('main h1').should('have.length', 2)
    cy.get('main h1').first().should('have.text', 'Bedankt voor jouw bericht!')
    cy.get('main h1').last().should('have.text', 'Ontvang Harmonics nieuws via e-mail')

    cy.get('main article').should('have.length', 1)
    cy.get('main article > div > div > p').first().should('have.text', 'Ik laat je zo snel mogelijk iets weten')
  })

  it('English page has correct content', () => {
    cy.get('header .languageSwitcher').should('have.length', 1)
    cy.get('header .languageSwitcher a').should('have.length', 2)
    cy.get('header .languageSwitcher a').last().click()
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/en/thanks/')
    })

    cy.get('main h1').should('have.length', 2)
    cy.get('main h1').first().should('have.text', 'Thanks for your message!')
    cy.get('main h1').last().should('have.text', 'Receive Harmonics news by email')

    cy.get('main article').should('have.length', 1)
    cy.get('main article > div > div > p').first().should('have.text', 'I\'ll get back to you soon')
  })
})
