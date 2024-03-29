///<reference types="cypress"/>

//seção 6 aula 31 - alerts
//Seção 8 aula 45 - comandos

describe('Work with alerts', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload() 
    })

    it('Alert', () => {
        /*cy.get('#alert').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Alert Simples')
     })*/ 
        //ERRO: TypeError: cy.clickAlert is not a function 
         cy.clickAlert('#alert', 'Alert Simples')

    })

    it('Alert com mock', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })
})