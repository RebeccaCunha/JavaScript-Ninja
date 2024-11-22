// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y) {
    var resultado = x + y
    return resultado;
}
console.log(soma(15, 5))
// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultadoSoma = soma(30, 10) + 5
console.log(resultadoSoma);

// Qual o valor atualizado dessa variável? 
45

// Declare uma nova variável, sem valor.
var semValor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionarValor() {
    semValor = 25
    console.log(`O valor da variável agora é ${semValor}.`);
}
// Invoque a função criada acima.
adicionarValor()

// Qual o retorno da função? (Use comentários de bloco).
/*O valor da variável
agora é 25.
/*


Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function multiplicar(num1, num2, num3) {
    if (num1 === undefined || num2 === undefined || num3 === undefined) {
        return "Preencha todos os valores corretamente!"
    }
    return (num1 * num2 * num3) + 2;
}
// Invoque a função criada acima, passando só dois números como argumento.
console.log(multiplicar(2,4,))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários. ==> 50
console.log(multiplicar(2,4,6))

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function resultados(a, b, c) {
    if (a !== undefined && b === undefined && c === undefined) {
        return a;
    } else if (a !== undefined && b !== undefined && c === undefined) {
        return a + b;
    } else if ( a !== undefined && b !== undefined && c !== undefined) {
        return (a + b) / c;
    } else if (a === undefined && b === undefined && c === undefined) {
        return false;
    } else {
        return null;
    }
}
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(resultados(1)) // ==> 1
console.log(resultados(6,9))// ==> 15
console.log(resultados(4,6,2)) // ==> 5
console.log(resultados()) // ==> false



