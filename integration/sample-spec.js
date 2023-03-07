describe('CSS-Tricks home page', function() {
  beforeEach(function() {
    cy.visit('https://css-tricks.com/');
  });
  
  it('contains "CSS-Tricks" in the title', function() {
    cy.title().should('contain', 'CSS-Tricks');
  });
});