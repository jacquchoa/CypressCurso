///<reference types="cypress" />

///Seção 02 Aaula 07


describe('Cypress basics', () => {
    it ('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        // cy.visit('https://www.canva.com/')

        // const title = cy.title()
        // console.log(title)

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

            //TODO escrever o titulo no console // o meu deu certo
            //TODO escrever o titulo em um campo de test

        it('Should find and interact with an element', () => {
            cy.visit('http://wcaquino.me/cypress/componentes.html')

            cy.visit('#buttonSimple').click
            cy.visit('#buttonSimple').should('have.value', 'Obrigado!')

            cy.get('#buttonSimple')
                .click() //não funcionou
                .should('have.value', 'Obrigado!') //não funcionou

        })

    })
})