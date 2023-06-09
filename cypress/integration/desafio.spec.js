///<reference types="cypress"/>

before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

beforeEach(() => {
    cy.reload() 
})

describe('Desafio',() => {
    it('Validancar Cadastro', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)

        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(0))
                .to.be.calledWith('Nome eh obrigatorio'))

        cy.get('#formNome').type('Jacq1')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(1))
                .to.be.calledWith('Sobrenome eh obrigatorio'))
 
        cy.get('[data-cy=dataSobrenome]').type('Uchoa1')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(2))
                .to.be.calledWith('Sexo eh obrigatorio'))

        cy.get('#formSexoFem').click()
        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1)')
            .should('contain', 'Cadastrado')
//deu certo!

    })

})