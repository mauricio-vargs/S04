function verificaNumero(numero){
    if(numero < 0) {
        return `O número ${numero} é negativo!`
    } else if(numero > 0){
        return `O número ${numero} é positivo!`
    } else {
        return `O número é zero!`
    }
}

console.log(verificaNumero(5))
console.log(verificaNumero(0))
console.log(verificaNumero(-4))