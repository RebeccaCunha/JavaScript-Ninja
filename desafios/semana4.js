/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function (teste) {
    if (teste) {
        return teste
    } else {
        return false
    }

}
console.log(isTruthy())
// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(false))
console.log(isTruthy(0))
console.log(isTruthy(-0))
console.log(isTruthy("")) //string vazia com aspas duplas e/ou simples.
console.log(isTruthy(NaN))
console.log(isTruthy(null))
console.log(isTruthy(undefined))

//Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
console.log(isTruthy(true))
console.log(isTruthy('0'))
console.log(isTruthy("teste"))
console.log(isTruthy([]))
console.log(isTruthy({}))
console.log(isTruthy(function () { }))
console.log(isTruthy(10 * 2))
console.log(isTruthy('Rebecca'))
console.log(isTruthy(1, 2, 3))
console.log(isTruthy({ a: 1, b: 2 }))

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: 'Hyundai',
    modelo: 'Veloster',
    placa: 'abc456',
    cor: 'preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function (cor) {
    carro.cor = cor;
    return `A nova cor do carro é ${carro.cor}.`
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function () {
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function () {
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function () {
    return carro.obterMarca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function () {
    return `Esse carro é um ${carro.marca} ${carro.modelo}.`
}
console.log(carro.obterMarcaModelo())
/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = function (numeroPessoas) {
    var totalPessoas = carro.quantidadePessoas + numeroPessoas;
    var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas
    var pluralOuSingular = quantasPessoasCabem === 1 ? 'pessoa' : 'pessoas';
    var singularOuPlural = carro.quantidadePessoas === 1 ? 'pessoa' : 'pessoas';

    if (carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos) {
        return `O carro já está lotado!`
    }
    
    if (totalPessoas > carro.assentos) {

        return `Só cabem mais ${quantasPessoasCabem} ${pluralOuSingular}!`
    }

    carro.quantidadePessoas += numeroPessoas;

    return `Já temos ${carro.quantidadePessoas} ${singularOuPlural} no carro!`
};

/*console.log(carro.adicionarPessoas(2));
console.log(carro.adicionarPessoas(8));
console.log(carro.adicionarPessoas(2));
console.log(carro.adicionarPessoas(8));
/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro? ==> preto
*/
carro.obterCor();
console.log(carro.obterCor())

// Mude a cor do carro para vermelho.
carro.mudarCor();
console.log(carro.mudarCor('vermelho'))

// E agora, qual a cor do carro?

//A nova cor do carro é vermelho.

// Mude a cor do carro para verde musgo.
carro.mudarCor();
console.log(carro.mudarCor('verde musgo'))

// E agora, qual a cor do carro?

//A nova cor do carro é verde musgo.

// Qual a marca e modelo do carro? ==> Esse carro é um Hyundai Veloster.0
carro.obterMarcaModelo();
console.log(carro.obterMarcaModelo());

// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoas(2)); // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoas(4)); // Só cabem mais 4 pessoas!

// Faça o carro encher.
console.log(carro.adicionarPessoas(3)); // Já temos 5 pessoas no carro!

// Tire 4 pessoas do carro.
console.log(carro.adicionarPessoas(-4)); // Já temos 1 pessoa no carro! (adicionei uma variável para o plural e singular)

// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoas(10)); // Só cabem mais 4 pessoas!

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas); // 1.