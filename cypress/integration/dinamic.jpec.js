/// <reference types="cypress" />

//seção 8 aula 46 - Teste dinamico
//seção 8 aula 47 - Teste dinamico

describe('Dinamic test', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

//Realizar a busca atraves do LABEL (xpath)

const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']
foods.forEach(food => {
    it(`Cadastro com comida ${food}`, () => {
        cy.get('#formNome').type('Usuario')
        cy.get('#formSobrenome').type('Qualquer')
        cy.get(`[name=formSexo][value=F]`).click()
        cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`).click()
        cy.get('#formEscolaridade').select('Doutorado')
        cy.get('#formEsportes').select('Corrida')
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    })
})

it.only('Deve selecionar todos usando o each', () => {
    cy.get('#formNome').type('Usuario')
    cy.get('#formSobrenome').type('Qualquer')
    cy.get(`[name=formSexo][value=F]`).click()
    // cy.get('[name="formComidaFavorita"]').click({ multiple: true })
    
    //Usando a funcionalidade '$el'
    //Para selecionar as opções não celecionando a opção vegetariano
    cy.get('[name="formComidaFavorita"]').each($el => {
        //$el.click()
        if($el.val() != 'vegetariano')
        cy.wrap($el).click()
    })

    cy.get('#formEscolaridade').select('Doutorado')
    cy.get('#formEsportes').select('Corrida')
    cy.get('#formCadastrar').click()
    cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    
    ///CLICKALERT esta apresentando erro, não encontra 'clickAlert' apos limpeza no notebook
    //cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')
})
})