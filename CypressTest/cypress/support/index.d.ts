// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {

    /*
    * Login in system by user
    * @example cy.login(emailId, username, password)
    */
    // login(emailId, username, password): Chainable<Element>  

  }
}
