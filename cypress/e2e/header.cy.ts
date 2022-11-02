describe('test header section', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('test language switcher', () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/nl/')
    })
    cy.get('header select').should('have.length', 1)
    cy.get('header select option').should('have.length', 2)
    cy.get('header select option').first().should('have.text', ' NL ')
    cy.get('header select option').last().should('have.text', ' EN ')
  })

  it('test social icons', () => {
    cy.get('header #socials').should('have.length', 1)
    cy.get('header #socials a').should('have.length', 3)
  })
})
