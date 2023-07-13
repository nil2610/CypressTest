describe('Test 1', () => {

    it('New T11', () => {
        cy.logger('Start New T11')
        cy.log(Cypress.env('URL'))        
        expect(true).to.be.true
    })

    it('New T12', () => {
        cy.log('New T12') 
        expect(true).to.be.false      
    })

})