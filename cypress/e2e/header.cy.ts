/// <reference types="Cypress" />

describe('test header section', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('test language switcher', () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
    })
    cy.get('header .languageSwitcher').should('have.length', 1)
    cy.get('header .languageSwitcher a').should('have.length', 2)
    cy.get('header .languageSwitcher a').first().should('have.attr', 'aria-current')
    cy.get('header .languageSwitcher a').first().should('have.class', 'opacity-100')
    cy.get('header .languageSwitcher a').first().should('not.have.class', 'opacity-30')
    cy.get('header .languageSwitcher a').last().should('not.have.attr', 'aria-current')
    cy.get('header .languageSwitcher a').last().should('have.class', 'opacity-30')
    cy.get('header .languageSwitcher a').last().should('not.have.class', 'opacity-100')
  })

  it('test social icons', () => {
    cy.get('header #socials').should('have.length', 1)
    cy.get('header #socials a').should('have.length', 3)
    cy.get('header #socialsOnMobile').should('have.length', 1)
    cy.get('header #socialsOnMobile a').should('have.length', 3)
  })
})
