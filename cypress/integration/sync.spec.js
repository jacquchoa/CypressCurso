///<reference types="cypress"/>
///Secao 04 Aula 18 - Entendenco a espera do Cypress

describe('esperas...', ()=> {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(() => {
        cy.reload()
    })

    ///Aula 18 - Entendenco a espera do Cypress
    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Funciona')
    })

     ///Aula 19 - Retrys - Retentativas
     it.only('Deve fazer retrys', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            //.should('not.exist')
            .should('exist')
            .type('Funciona')
            
    })

})