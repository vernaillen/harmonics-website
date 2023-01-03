/// <reference types="Cypress" />

describe('test homepage language redirect', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('test automatic language redirect to Dutch', () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
    })
    cy.get('main h4').should('have.length', 1)
    cy.get('main h4').first().should('have.text', 'Genezende kracht van Geluid, Muziek en Dans')
  })

  it('test switch to English', () => {
    cy.get('header .languageSwitcher').should('have.length', 1)
    cy.get('header .languageSwitcher a').should('have.length', 2)
    cy.get('header .languageSwitcher a').last().click()
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/en')
    })
    cy.get('main h4').should('have.length', 1)
    cy.get('main h4').first().should('have.text', 'Healing power of Sound, Music and Dance')
  })
})

describe('test homepage title section', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('test Dutch title section', () => {
    cy.get('main section#title').should('have.length', 1)
    cy.get('main section#title h1').should('have.length', 1)
    cy.get('main section#title h1').first().should('have.text', 'Harmonics')
    cy.get('main section#title h4').should('have.length', 1)
    cy.get('main section#title h4').first().should('have.text', 'Genezende kracht van Geluid, Muziek en Dans')
    cy.get('main section#title p').should('have.length', 1)
    cy.get('main section#title p').first().should('have.text', 'Trance Dance, Ecstatic Dance, Immersive Soundbaths, Muziek Productie')
  })
  it('test English section', () => {
    cy.get('header .languageSwitcher').should('have.length', 1)
    cy.get('header .languageSwitcher a').should('have.length', 2)
    cy.get('header .languageSwitcher a').last().click()
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/en')
    })
    cy.get('main section#title').should('have.length', 1)
    cy.get('main section#title h1').should('have.length', 1)
    cy.get('main section#title h1').first().should('have.text', 'Harmonics')
    cy.get('main section#title h4').should('have.length', 1)
    cy.get('main section#title h4').first().should('have.text', 'Healing power of Sound, Music and Dance')
    cy.get('main section#title p').should('have.length', 1)
    cy.get('main section#title p').first().should('have.text', 'Trance Dance, Ecstatic Dance, Immersive Soundbaths, Music Production')
  })
})

describe('test homepage blog post section', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('test blog post section', () => {
    cy.get('main > div > section#blogposts').should('have.length', 1)
    cy.get('section#blogposts > div > div').should('have.length', 1)
  })
})
