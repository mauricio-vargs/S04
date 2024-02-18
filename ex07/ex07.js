function greetings(hour) {
    if(hour <= 12 && hour > 0){
        return `Bom dia!`
    } else if(hour > 12 && hour < 18) {
        return `Boa tarde!`
    }else if(hour >= 18 && hour <= 24){
        return `Boa noite!`
    }else {
        return`Horário Invalido`
    }

}

console.log(greetings(12))
console.log(greetings(13))
console.log(greetings(18))
console.log(greetings(24))
console.log(greetings(25))