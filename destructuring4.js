function rant([min = 0, max= 1000]){
    if(min > max)[min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rant([50, 40]))
console.log(rant([992])) // considera como o mínimo
console.log(rant([,10]))
console.log(rant([]))
console.log(rant()) // não consegue ler elementos indefinidos

