var minhaVar = 'Minha Variavel';
function minhaFuncao (x,y){
return x + y;
}
//ES6 ou ES 2015
let num = 2;
//posso tipar a variavel como string utilizando o typescript
const letra : string = 'a';
let numeros = [1,2,3];
numeros.map(function(valor){
return  valor * 2;
})
//Exemplo de Arrow Functions
//Codigo equivalente ao de cima
//ES 2015 == ECMAScript 2015
numeros.map(valor => valor * 2);

class Matematica {
    soma(x,y){return x + y;}
}