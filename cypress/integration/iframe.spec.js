///<reference types="cypress"/>
   
describe('Work with IFrames',() => {
    it('Preencher campo texto',() =>{
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.get('#frame1').then(iframe =>{
        const body = iframe.contents().find('body')
    cy.wrap(body).find('#tfield')
        .type('Funciona?')
        //.should('have.vallue','Funciona?')

   /*     cy.on("window:alert",msg =>{
            expect(msg).to.be.equal('Alerta Simples')
        })
    //clicar no botão do iframe É POSSIVEL, MAS NÃO TEM LOG NO CYPRESS
        cy.wrap(body).find('#otherButton').click()
    */ })
    })
    it('Deve testar frame diretament', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })
})