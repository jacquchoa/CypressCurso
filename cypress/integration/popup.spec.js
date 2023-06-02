///<reference types="cypress"/>
   
describe('Work with IFrames',() => {
    it('Deve testar frame diretament', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })
    it('Preencher campo texto',() =>{
    cy.visit('https://wcaquino.me/cypress/componentes.html')
        //mocks
    cy.window().then(win =>{
        cy.stub(win,'open').as('winOpen')
    })
        //comentando a linha do click, valida se ouve o chamado, gerando erro na execução
    cy.get('#buttonPopUp').click() 
        //verifica se o popup foi chamado
    cy.get('@winOpen').should('be.called')
})
    
})
describe ('Popup por links', () =>{
     beforeEach(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
     })
     //1º testes acesso POPUP POR UMA URL
     it('Checar Popup URL',() => {
        cy.contains('Popup2')
            .should('have.prop', 'href')
            .and('equal', 'https://wcaquino.me/cypress/frame.html')
     })
     
     //2º teste LINK DINÂMICO 
     it('Acessar Popup Dinamico', ()=> {
        cy.contains('Popup2').then($a => {
            const href = $a.prop('href')
            cy.visit(href)
            cy.get('#tfield').type('Funciona')
        })
            
     })

     //3º testes REMOVENDO O ATRIBUTO TARGET
     //para o cypress acessar na mesma tela
     it(('Abrir link, same page'), () => {
        cy.contains('Popup2')
            .invoke('removeAttr', 'target')
            .click()
        cy.get('#tfield').type('funciona')

     })

})