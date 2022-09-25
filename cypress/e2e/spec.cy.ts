describe('My First Test', () => {
  it('should display welcome message', () => {
    cy.visit('/');
    cy.title().should('eq', 'björk.fr');
  });
});


