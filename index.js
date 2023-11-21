

// for (let i = 0;i <=10 ; i++){
//     const dobro = i*2; 


//     console.log("o dobro do numero "+i+" é " +dobro);
    
// }


function somar(numero1,numero2) {
    return numero1 + numero2

}
let resultadoDasSoma = somar (10,10) 
console.log(resultadoDasSoma)


let resultadoDaSoma = function (numero1, numero2) {
    return numero1 + numero2 
}
console.log(resultadoDaSoma(10,10))


//Arrow Functions
let outraSoma = (numero1, numero2) => {
    return numero1 + numero2
}
console.log(outraSoma(12,15))


const incentivarQuester = nomeQuester => console.log("Parabéns "+nomeQuester+", Você chegou ao módulo de JS intermediário")
incentivarQuester("Ted") //maneira com menos código 


//Higher order functions 
function multiplicar(multiplicador ) {
    return function (numero){
        return  numero * multiplicador
    }    
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(6))
console.log(triplicar(6))
console.log(quadruplicar(6))