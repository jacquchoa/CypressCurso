///<reference types="cypress"/>
///Secao 03 Aula 10 - TEXTO
///Secao 03 aula 11 - LINK
///Secao 03 aula 12 - Hooks (Before)
///Sessão 3 aulo 13 - TESTES DE CAMPO TEXTO
///Sessão 3 aulo 14 - RADIO BUTTON teste
///sessão 3 aula 15 - Checkbox
///sessão 3 aula 16 - Combo 
///sessão 3 aula 17 - Combo Multiplo

///hoods secao 03 aula 12
before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

beforeEach(() => {
    cy.reload() 
})

describe('Work with basic elements',() => {
    it('Text',() => {
    cy.get('body').should('contain', 'Cuidado')
    
    cy.get('span').should('contain', 'Cuidado')
    
    cy.get('.facilAchar').should('contain', 'Cuidado')
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })
    
    ///Secao 03 aula 11 - LINK
    it('Link', () => {
        //cy.get('a').click()
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload() ///atualizando a pagina
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    //})
    //describe('test hooks',() =>{
      //  before(() => {
      //      cy.visit('https://wcaquino.me/cypress/frame.html')
      //  })

      // it('externo', () => {
      //  })
    })    
    ////sessão 3 aulo 13 - TESTES DE CAMPO TEXTO
    it('TextFields', () => {
        cy.get('#formNome').type('Cypress Test') //escrever no campo nome
        cy.get('#formNome').should('have.value', 'Cypress Test')//acertiva

        cy.get('#elementosForm\\:sugestoes')//escrever no campo obs usando '\\:'
            .type('textarea')
            .should('have.value','textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('abcd')

        cy.get('[data-cy=dataSobrenome]')            //BUSCA POR 'PROPRIEDADE'
            .type('Teste12345{backspace}{backspace}')//apagar letrar
            .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
        .clear()                                   //limpar campo
        .type('Erro{selectall}acerto',{delay:100}) //tempo de espera
        .should('have.value', 'acerto')
    
    })
    ////sessão 3 aulo 14 - RADIO BUTTON teste
    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc').should('not.be.checked')//BUSCA POR 'PROPRIEDADE'

        cy.get("[name='formSexo']").should('have.length', 2) 
    })

    ///Sessão 3 aula 15 - Checkbox
    it('Checkbox', () => {
        cy.get('#formComidaPizza')
        .click()
        .should('be.checked')

        cy.get('[name="formComidaFavorita"]').click({multiple: true})
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
    })

    ///sessão 3 aula 16 - Combo
    it('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')
            
        cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value', '1graucomp')
        })

    ///sessão 3 aula 17 - Combo Multiplo
    it.only('Combo Multiplo', ()=> {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida', 'nada'])

    })
})