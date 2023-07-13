Cypress.Commands.add('logger', (message) => {
    cy.task('logger', message)
})