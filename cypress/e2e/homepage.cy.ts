/// <reference types="Cypress" />

describe('test homepage language redirect', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('/en', {
      onBeforeLoad: (_contentWindow) => {
        Object.defineProperty(_contentWindow.navigator, 'language', { value: 'en' })
      }
    })
  })

  it('test English', () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/en')
    })
    cy.get('main h2').should('have.length', 1)
    cy.get('main h2').first().should('have.text', 'Healing power of Sound, Music and Dance')
  })

  it('test switch to Dutch', () => {
    cy.get('header .languageSwitcher').should('have.length', 1)
    cy.get('header .languageSwitcher a').should('have.length', 2)
    cy.get('header .languageSwitcher a').first().contains('NL')
    cy.get('header .languageSwitcher a').last().contains('EN')
    cy.get('header .languageSwitcher a').first().click()
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
    })
    cy.get('main h2').should('have.length', 1)
    cy.get('main h2').first().should('have.text', 'Genezende kracht van Geluid, Muziek en Dans')
  })
})

describe('test homepage title section', () => {
  beforeEach(() => {
    cy.visit('/en')
  })
  it('test English title section', () => {
    cy.get('main section#title').should('have.length', 1)
    cy.get('main section#title h1').should('have.length', 1)
    cy.get('main section#title h1').first().should('have.text', 'Harmonics')
    cy.get('main section#title h2').should('have.length', 1)
    cy.get('main section#title h2').first().should('have.text', 'Healing power of Sound, Music and Dance')
    cy.get('main section#title p').should('have.length', 1)
    cy.get('main section#title p').first().should('have.text', 'Trance Dance, Ecstatic Dance, Immersive Soundbaths, Music Production')
  })
  it('test Dutch title section', () => {
    cy.get('header .languageSwitcher').should('have.length', 1)
    cy.get('header .languageSwitcher a').should('have.length', 2)
    cy.get('header .languageSwitcher a').first().contains('NL')
    cy.get('header .languageSwitcher a').first().click()
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
    })
    cy.get('main section#title').should('have.length', 1)
    cy.get('main section#title h1').should('have.length', 1)
    cy.get('main section#title h1').first().should('have.text', 'Harmonics')
    cy.get('main section#title h2').should('have.length', 1)
    cy.get('main section#title h2').first().should('have.text', 'Genezende kracht van Geluid, Muziek en Dans')
    cy.get('main section#title p').should('have.length', 1)
    cy.get('main section#title p').first().should('have.text', 'Trance Dance, Ecstatic Dance, Immersive Soundbaths, Muziek Productie')
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
