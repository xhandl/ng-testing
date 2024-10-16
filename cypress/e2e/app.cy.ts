describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct title', () => {
    cy.title().should('equal', 'NgTesting');
  });

  it('the first counter 5 exists', () => {
    cy.byTestId('count')
      .first()
      .should('have.text', '5');
  });

  it('increments the count', () => {
    cy.byTestId('counter')
      .within(() => {
        cy.byTestId('count').should('have.text', '5');
        cy.byTestId('increment-button').click();
        cy.byTestId('count').should('have.text', '6');
      });
  });

  it('decrements the count', () => {
    cy.byTestId('counter')
      .within(() => {
        cy.byTestId('decrement-button').click();
        cy.byTestId('count').should('have.text', '4');
      });
  });

  it('resets the count', () => {
    cy.byTestId('counter')
      .within(() => {
        cy.byTestId('reset-input').type('123');
        cy.byTestId('reset-button').click();
        cy.byTestId('count').should('have.text', '123');
      });
  });
});
