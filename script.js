var primeiroValor = parseInt(prompt('Digite o primeiro valor:'))
var segundoValor = parseInt(prompt('Digite o segundo valor:'))

var operação = prompt('Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração:')

if (operação == 1) {
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " : " + segundoValor + " = " + resultado + "</h2>")
} else if (operação == 2) {
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
} else if (operação == 3) {
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (operação == 4) {
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} else {
  document.write("<h2>Opção Inválida</h2>")
}


