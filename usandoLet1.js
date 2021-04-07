var numero = 1 // escopo global, função

{
    let numero = 2 // escopo de bloco
    console.log('dentro =', numero)
}

console.log('fora =', numero)