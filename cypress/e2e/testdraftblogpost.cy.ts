describe('check draft post', () => {
  beforeEach(() => {
    cy.visit('/nl/drafts/trancedancefacilitatortraining')
  })

  it('displays title & taglines', () => {
    cy.get('article > .markdown-body p').should('have.length', 3)
    cy.get('article > .markdown-body p').last().should('have.text', 'En nog een extra tekstje om cypress e2e nogmaals te testen')
  })
})
