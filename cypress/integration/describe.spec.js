/// <reference types="cypress" />"

////AJUDA A AGRUPAR TESTES

//aula 5-SKIP - NÃO EXECULTA
//aula 5-ONLY - EXECULTA somente o indicado

it ('A external test...', ()=> {
    
})

describe('Should grup testes...',()=>{
    describe('Should group more specific tests...', () => {
        it('A specific test...', () => {

        })
    })

    describe('Should group more specific tests 2...', () => {
        it('A specific test 2...', () => {

        })
    })

    it('A internal test...', () => {

    })
})