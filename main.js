// Declaração das variáveis

let operação = prompt("informe a operação desejada: ")
let numero1 = Number (prompt("informe o primeiro desejada: "))
let numero2 = Number (prompt("informe o segundo desejada: "))

//Verificar a operação matemática selecionada
if (operação == "+") {
    let resultado = numero1 + numero2
    prompt("o resultado da soma é" + resultado + ".")
}

if (operação == "-") {
    let resultado = numero1 - numero2
    document.write ("o resultado da subtração é" + resultado + ".")

}

if (operação == "*") {
    let resultado = numero1 * numero2
    document.write ("o resultado da mutiplicação é" + resultado + ".")

}

if (operação == "/") {
    let resultado = numero1 / numero2
    document.write ("o resultado da divisão é" + resultado + ".")
}
