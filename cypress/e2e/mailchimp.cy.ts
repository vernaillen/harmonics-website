describe('test mailchimp modal', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('modal opens after 3 seonds', () => {
    cy.get('#mc_embed_signup').should('have.length', 0)
    cy.wait(3100)
    cy.get('#mc_embed_signup').should('have.length', 1)
  })
})
