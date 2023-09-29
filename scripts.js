
alert("Vamos fazer algumas operações matemáticas?")

let number1 = prompt("Digite o primeiro número:")
let number2 = prompt("Digite o segundo número:")
number1 = Number(number1)
number2 =Number(number2)


let sum = number1 + number2;
let sub = number1 - number2;
let mult = number1 * number2;
let division = number1 / number2;
let rest = number1  % number2;

alert(`A soma é: ${sum}`)
alert(`A subtração é: ${sub}`)
alert(`A multiplicação é: ${mult}`)
alert(`A divisão é: ${division}`)
alert(`O resto da divisão é: ${rest}`)


let result = [];
result.push(sum)

if (result % 2 === 0) {
    alert("A soma dos dois números é par: " + sum);
  } else {
alert( "A soma dos dois números é ímpar: " + sum);
  }

if(number1 === number2) {
     alert("Você selecionou dois números iguais!")
    } else{
        alert("Perfeito!")}