console.log(typeof Object)
console.log(typeof new Object()) // objeto instanciado

const CLiente = function(){}
console.log(typeof CLiente)
console.log(typeof new CLiente)

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto) // converte para function
console.log(typeof new Produto) // converte para Object