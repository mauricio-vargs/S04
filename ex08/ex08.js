function parOuImpar(num){
    if(num % 2 === 0){
        return `O numero ${num} é par`
    }
    else{
        return `O numero ${num} é impar`
    }
}

console.log(parOuImpar(5))
console.log(parOuImpar(4))