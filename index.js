

// for (let i = 0;i <=10 ; i++){
//     const dobro = i*2; 


//     console.log("o dobro do numero "+i+" é " +dobro);

// }


// function somar(numero1, numero2) {
//     return numero1 + numero2

// }
// let resultadoDasSoma = somar(10, 10)
// console.log(resultadoDasSoma)


// let resultadoDaSoma = function (numero1, numero2) {
//     return numero1 + numero2
// }
// console.log(resultadoDaSoma(10, 10))


// //Arrow Functions
// let outraSoma = (numero1, numero2) => {
//     return numero1 + numero2
// }
// console.log(outraSoma(12, 15))


// const incentivarQuester = nomeQuester => console.log("Parabéns " + nomeQuester + ", Você chegou ao módulo de JS intermediário")
// incentivarQuester("Ted") //maneira com menos código 


// //Higher order functions 
// function multiplicar(multiplicador) {
//     return function (numero) {
//         return numero * multiplicador
//     }
// }

// let dobrar = multiplicar(2)
// let triplicar = multiplicar(3)
// let quadruplicar = multiplicar(4)

// console.log(dobrar(6))
// console.log(triplicar(6))
// console.log(quadruplicar(6))



//Manipulando atributos e estilos de dos elementos de DOM

// function marcarRadio(genero) {
//     let radioMasculino = document.getElementById('genero-masculino');
//     let radioFeminino = document.getElementById("genero-feminino");
//     if (genero === "M") {
//         radioMasculino.checked = true;
//     } else if (genero === "F") {
//         radioFeminino.checked = true;
//     }
// }

//eventos de DOM
// document
// .querySelector("select[name=estados]")
// .addEventListener('change',function(event){
//     console.log(event.target.value)
// });


//resolução de exercício intermediário 1
// const botao = document.getElementById('botaoMudaCor');
// const quadradoAzul = document.querySelector('.azul');

// botao.addEventListener('click', trocardeCor)

// function trocardeCor() {
//     quadradoAzul.classList.remove('azul');
//     quadradoAzul.classList.add('amarelo');
        
//     }

    // const botao = document.getElementById('botaoMudaCor');
    // const quadradoVermelho = document.querySelector('.vermelho');
    // console.log(quadradoVermelho)
    // botao.addEventListener('click', trocarCor);

    // function trocarCor() {
    //     quadradoVermelho.classList.remove('vermelho');
    //     quadradoVermelho.classList.add('verde');
    // }
    
// const botao = document.getElementById('botaoMudaCor');
// const quadradoAzul = document.querySelector('.azul');
// const quadradoVermelho = document.querySelector('.vermelho');

// botao.addEventListener('click',trocarCor);

// function trocarCor(){
//     quadradoAzul.classList.remove('azul');
//     quadradoAzul.classList.add('amarelo');
//     quadradoVermelho.classList.remove('vermelho');
//     quadradoVermelho.classList.add('verde');
// }

const numeral = [65, 44, 12, 4];

numeral.forEach((item) => {
    console.log(item *10);
});
    
const numeros = [10, 15, 20, 25];

numeros.forEach((index) => {
    console.log(index /10)
})