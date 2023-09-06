///<reference types="cypress"/>
///Secao 04 Aula 18 - Entendenco a espera do Cypress
///Secao 04 Aula 19 - Retrys - Retentativas
///Secao 04 Aula 20 - Cuidado com o que busca 
///Secao 04 Aula 21 - wait e timeout

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
    it('Deve fazer retrys', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            //.should('not.exist')
            .should('exist')
            .type('Funciona') 
    })

    ///Aula 20 - Cuidado com o que busca (botoes: buttonList e buttonListDOM)
    it('Uso do find', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')      ///reduz o escopo focando no 'lista li'
            .find('span')
            .should('contain', 'Item 1')
        /*cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 2')   */

        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    ///Aula 21 - wait e timeout
    it('Uso do timeout', () => {
    /* cy.get('#buttonDelay').click()
        //cy.get('#novoCampo', { timeout: 1000 }).should('exist') //timeout
        cy.get('#novoCampo').should('exist') //Timeout de 5 segundos
    */ //// timout para todas as buscas com o tempo de 1 segundo    
     ///(arq: cupress.json  -- {"defaultCommandTimeout": 1000})   

    /* cy.get('#buttonListDOM').click()
        cy.wait(5000)                 ///espera fixa de 5 segundos
        cy.get('#lista li span')      ///reduz o escopo focando no 'lista li'
            .should('contain', 'Item 2')
    */
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span'/*, { timeout: 30000 }*/)
            .should('have.length', 1)  ///Busca a quantidade de registro na lista
        cy.get('#lista li span')
            .should('have.length', 2) 
    })

    ///Aula 22 - Nem todos necessitam de Retry
    it.only('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .should('have.value', '1')

    
    })
})