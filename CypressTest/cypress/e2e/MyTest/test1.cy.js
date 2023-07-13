describe('Test 1', () => {

    it('New T11', () => {
        cy.logger('Start New T11')
        cy.log(Cypress.env('URL')) 
        cy.log(Cypress.env('tokenURL'))
        cy.log(Cypress.env('clientId'))   
        cy.log(Cypress.env('clientSecret'))
        cy.log(Cypress.env('apiURL'))
        expect(true).to.be.true
    })

    it('New T12', () => {
        cy.log('New T12') 
        expect(true).to.be.false      
    })

})