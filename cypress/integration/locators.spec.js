///<reference types="cypress"/>

//Seção 7 aula 41 e 42

describe('Desafio', () => {
before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

beforeEach(() => {
    cy.reload() 
})

    it('Using JQuery Selector', () => {
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input')
        cy.get("[onclick*='Francisco']")
        cy.get('#tabelaUsuarios td:contains(\'Doutorado\'):eq(0) ~ td:eq(3) > input')
        cy.get('#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6) input')
    })

    it('Using xpath', () => {
// apresentando TypeError: cy.xpath is not a function 
        cy.xpath('//input[contains(@onclick,\'Francisco\')]')
    //    cy.xpath("//table[@id='tabelaUsuarios']//td[contains(.,'Francisco)]/.,//input[@type='text']")
    //    cy.xpath("//to[contains(.,'Usuario A')]/following-sibling;;td[constains(.,'Mestrado')]/..//input(@type='text').type('Funciona')")
    })
})

