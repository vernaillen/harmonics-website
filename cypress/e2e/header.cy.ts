/// <reference types="Cypress" />

describe('test header section', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('/en', {
      onBeforeLoad: (_contentWindow) => {
        Object.defineProperty(_contentWindow.navigator, 'language', { value: 'en' })
      }
    })
  })

  it('test language switcher', () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/en')
    })
    cy.get('header .languageSwitcher').should('have.length', 1)
    cy.get('header .languageSwitcher a').should('have.length', 2)
    cy.get('header .languageSwitcher a').first().contains('NL')
    cy.get('header .languageSwitcher a').last().contains('EN')
  })

  it('test social icons', () => {
    cy.get('header #socials').should('have.length', 1)
    cy.get('header #socials a').should('have.length', 3)
    cy.get('header #socialsOnMobile').should('have.length', 1)
    cy.get('header #socialsOnMobile a').should('have.length', 3)
  })
})
