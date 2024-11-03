const valor1 = document.getElementsByClassName('valor1')
const valor2 = document.getElementsByClassName('valor2')
const valor3 = document.getElementsByClassName('valor3')
const valor4 = document.getElementsByClassName('valor4')
const valor5 = document.getElementsByClassName('valor5')
const valor6 = document.getElementsByClassName('valor6')
const valor7 = document.getElementsByClassName('valor7')
const valor8 = document.getElementsByClassName('valor8')
const valor9 = document.getElementsByClassName('valor9')
const valor0 = document.getElementsByClassName('valor0')
const mostrar = document.querySelector('#mostrar-problema')
const resultado = document.querySelector('#resultado')

let obtenerElemento = ''
let resultadoProblema = 0
let inputSigno = ''
const arrayNumeros = [1,2,3,4,5,6,7,8,9,0]
const signos = ['+','-','/','x']


let input1 = ''
let input2

function resolverProblema(numero1,numero2,signo){
    if(signo == '+'){
        console.log('Esta es la resta')
        resultadoProblema = parseInt(numero1) + parseInt(numero2)
        return resultadoProblema
    }else if(signo == '-'){
        resultadoProblema = parseInt(numero1) - parseInt(numero2)
        console.log('Esta es la resta')
        return parseInt(resultadoProblema)
    }else if(signo == 'x'){
        resultadoProblema = parseInt(numero1) * parseInt(numero2)
        console.log(numero1, numero2, 'es una prueba')
        return parseInt(resultadoProblema)
    }else if(signo == '/'){
        resultadoProblema = parseInt(numero1) / parseInt(numero2)
        return resultadoProblema
    }
}


function alertPrueba(valor){

    if(arrayNumeros.includes(valor) && input2 === undefined){
        input1 = input1 + valor.toString() 
        obtenerElemento = input1 
        console.log(obtenerElemento)
    }
    else{
        if(signos.includes(valor) ){
            console.log('divicion')
            input2 = ''
            obtenerElemento = obtenerElemento + valor
            inputSigno = valor
           
           
        }else{
            input2 = input2 + valor.toString()
            obtenerElemento = obtenerElemento + valor
            
            console.log(input1, 'test')
            
            resolverProblema(input1,input2,inputSigno)
        }
    }
    
    mostrar.innerHTML = obtenerElemento
    resultado.innerHTML = resultadoProblema
    
}

