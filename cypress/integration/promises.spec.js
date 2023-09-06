//const { it } = require("mocha");

//seção 2 aula 4 - Promises
//seção 2 aula 4 - Teste...

it('sem testes, ainda', () => { })

//variavel
const getSomething = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(13);
        }, 1000)
    })
};

//metodo com fluxo Acicronnicidadeo --> acincrona
// const system = () => {
//     console.log('init');
//     getSomething(some =>{
//         console.log(`SomeThing is ${some}`)
//         console.log('end')
//     })
// }

//metodo
const system = () => {
    console.log('init');
    getSomething().then(some =>{
        console.log(`Something is ${some}`)
        //console.log('end') //end = sincrono
    })
    console.log('end')
}

system();