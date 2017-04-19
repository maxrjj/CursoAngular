var minhaVar = 'Minha Variavel';
function minhaFuncao(x, y) {
    return x + y;
}
//ES6 ou ES 2015
var num = 2;
//posso tipar a variavel como string
var letra = 'a';
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
//Exemplo de Arrow Functions
//Codigo equivalente ao de cima
//ES 2015 == ECMAScript 2015
numeros.map(function (valor) { return valor * 2; });
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) { return x + y; };
    return Matematica;
}());
