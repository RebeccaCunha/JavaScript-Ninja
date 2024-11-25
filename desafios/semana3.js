// Declarar uma variável qualquer, que receba um objeto vazio.
var myvar = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var pessoa = { nome: 'Rebecca', sobrenome: 'Cunha', sexo: 'feminino', idade: 30, altura: 1.62, peso: 68, andando: false, caminhouQuantosMetros: 0 };

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve ==> 31
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = function () {
    return pessoa.idade++;
}
console.log(pessoa.fazerAniversario())
console.log(pessoa.idade)

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes ==> A pessoa caminhou 5 metros.
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = function (metros) {
    pessoa.caminhouQuantosMetros += metros;
    pessoa.andando = true;
    return `A pessoa caminhou ${pessoa.caminhouQuantosMetros}  metros. ${pessoa.andando}` ;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function () {
    pessoa.andando = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase: ==> Olá! Meu nome é Rebecca Cunha!
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function () {
    return `Olá! Meu nome é ${pessoa.nome} ${pessoa.sobrenome}!`
}
console.log(pessoa.nomeCompleto())
/*
Crie um método chamado `mostrarIdade`, que retorne a frase: ==> Olá, eu tenho 31 anos!
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = function () {
    return `Olá, eu tenho ${pessoa.idade} anos!`
}
console.log(pessoa.mostrarIdade());
/*
Crie um método chamado `mostrarPeso`, que retorne a frase: ==> Eu peso 68Kg.
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function () {
    return `Eu peso ${pessoa.peso}Kg.`
}
console.log(pessoa.mostrarPeso());
/*
Crie um método chamado `mostrarAltura` que retorne a frase: ==> Minha altura é 1.62m.
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = function () {
    return `Minha altura é ${pessoa.altura}m.`
}
console.log(pessoa.mostrarAltura());
/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.nomeCompleto();
console.log(pessoa.nomeCompleto());
//Olá! Meu nome é Rebecca Cunha!

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarIdade();
console.log(pessoa.mostrarIdade());
//Olá, eu tenho 31 anos!
/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarPeso();
console.log(pessoa.mostrarPeso());
//Eu peso 68Kg.
/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarAltura();
console.log(pessoa.mostrarAltura());
//Minha altura é 1.62m.
/*
Faça a `pessoa` fazer 3 aniversários. 
*/
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();
console.log(pessoa.mostrarIdade());

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
//Olá, eu tenho 34 anos!

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x, ==> A pessoa caminhou 200 metros e está andando.
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(100);
pessoa.andar(50);
pessoa.andar(200);
console.log(pessoa.andando)
console.log(pessoa.andar(100));

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários ==> true
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/


/*
Se a pessoa ainda está andando, faça-a parar. ==> false
*/
pessoa.parar();
console.log(pessoa.andando)

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/


/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
//console.log(pessoa.andar());

//console.log(pessoa.andar);

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.


*/
pessoa.apresentacao = function () {
    let artigo = pessoa.sexo === 'feminino' ? 'a' : 'o';
    let anosOuAno = pessoa.idade === 1 ? 'ano' : 'anos';
    //let metrosOuMetro = pessoa.caminhouQuantosMetros === 1 ? 'metro' : 'metros';

    return `Olá, eu sou ${artigo} ,${pessoa.nome}, tenho ${pessoa.idade} ${anosOuAno}, ${pessoa.altura}m, meu peso é ${pessoa.peso}Kg e, só hoje eu já caminhei ${pessoa.caminhouQuantosMetros} metros!`;
}


console.log(pessoa.apresentacao());
// Agora, apresente-se ;)
