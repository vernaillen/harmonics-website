/// <reference types="Cypress" />

describe('test mailchimp modal', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('modal opens after 2 seonds & can be closed with close button', () => {
    cy.get('.modal #mc_embed_signup').should('have.length', 0)
    cy.wait(2100)
    cy.get('.modal #mc_embed_signup').should('have.length', 1)
    cy.get('.modal > div > button').should('have.length', 1)
    cy.get('.modal > div > button').click()
    cy.get('.modal #mc_embed_signup').should('have.length', 0)
  })
  it('modal can be closed by click outside', () => {
    cy.get('.modal #mc_embed_signup').should('have.length', 0)
    cy.wait(2100)
    cy.get('.modal #mc_embed_signup').should('have.length', 1)
    cy.get('.modal > div > button').should('have.length', 1)
    cy.get('body').click(10, 10)
    cy.get('.modal #mc_embed_signup').should('have.length', 0)
  })
})
