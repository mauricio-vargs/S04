
function setAge(){
    let age = prompt('Qual a sua idade?')
    console.log(verifyAge(age))
}




function verifyAge(age){
    if(age >= 18){
        return `Você é maior de idade!`
    }else if(age <= 18 && age >= 0){
        return `Você é menor de idade!`
    }else {
        return `Insira um valor numérico e positivo!`
    }
}
