let number1 = prompt('digite o primero número: ')
let number2 = prompt('digite o segundo número: ')

number1 = Number(number1)
number2 = Number(number2)

const sum = number1 + number2 //const deixa o valor imutavel
const sub = number1 - number2
const multi = number1 * number2
const div = number1 / number2
const restDiv = number1 % number2

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)
if(sum % 2 == 0) {
    alert("A soma dos dois números é par")
} else {
    alert("A soma dos dois números é ímpar")
}
if(number1 == number2) {
    alert("Os dois números são iguais")
} else {
    alert("Os dois números são diferentes")
}