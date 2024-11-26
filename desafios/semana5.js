/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var valores = [8, 9, 13, 25, 31];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function param (arr) {
return arr;
}
console.log(param ())
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(param(valores) [1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction (array, num) {
    return array [num];
}
console.log(myFunction(valores, 3))
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var lista = ['Rebecca', 2, true, "0", [1, 2, 3]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(lista);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (bookName) {
    var livros = {
        'Imperfeitos': {
            quantidadePaginas: 196,
            autor: 'Christina Lauren',
            editora: 'Faro Editorial'
        },

        'É assim que acaba': {
            quantidadePaginas: 300,
            autor: 'Collen Hoover',
            editora: 'Galera',
        },

        'Gente que convence': {
            quantidadePaginas: 236,
            autor: 'Eduardo Ferraz',
            editora: 'Planeta Estratégia',
        },
    }

    return !bookName ? livros : livros[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

console.log(`O livro Gente que convence tem ${book('Gente que convence').quantidadePaginas} páginas!`);
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(` A autora do livro É assim que acaba é a ${book('É assim que acaba').autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Imperfeitos foi publicado pela editora ${book('Imperfeitos').editora}.`)