# 7 Days of Code - Basic Birthday Crud

## Day 1 :

Hoje, você irá preparar a estrutura base da sua aplicação. Para dar início na aplicação, você vai precisar dos seguintes elementos:

- Um título
- Um formulário (representando uma pessoa)

E o seu formulário terá:

- Um campo para informar o nome
- Um campo para informar a data de nascimento

Com essa estrutura base criada, você precisará vincular uma função ao evento de submissão do formulário. A função vinculada deverá pegar o valor informado nos campos nome e data de nascimento e imprimi-los no console.

## Day 2 :

Até o momento, ao submeter o formulário criado, o mesmo está sendo processado sem aplicar nenhuma validação. Isso pode ser um problema dependendo das regras de negócio envolvidas no projeto.

Os tipos de validação são diversos. Você pode querer que um campo tenha um limite mínimo e/ou máximo de caracteres; que a pessoa não possa digitar números, apenas letras; formatos específicos de data e horário; entre muitos outros.

Dessa forma, seu desafio de hoje será garantir um conjunto mínimo de validações para o seu formulário. Como ele representa uma pessoa, com nome e data de nascimento, as regras de negócio serão:

Um nome precisa ter no mínimo três letras.
Um nome pode ter no máximo 120 letras.
Um nome pode apenas conter letras, e não números.
A data de nascimento precisa estar no formato DD/MM/AAAA, por exemplo: 31/01/2021.
O mês informado deve estar entre 01 e 12.

https://www.alura.com.br/artigos/formulario-com-form-validation-do-html5?utm_medium=email&_hsenc=p2ANqtz--6BEToiEnXadW0w088ZYRxR-qKveN8ey73bi9n63KLgFDVwdaGjvKGcs19OEeftZuPF2U2grDc5giVgaJC9Thvf0S54Q&_hsmi=283534076&utm_content=283534076&utm_source=hs_automation

## Day 3 :
No desafio de ontem, você aplicou algumas validações ao seu seu formulário. Elas eram regras de negócio que faziam bastante sentido, como limites de tamanho e formatos da data.

Porém, isso não é suficiente. Ao clicar no botão de “submeter o formulário”, nada está acontecendo e esses dados estão sendo perdidos. E se você conseguisse salvá-los em algum lugar? ;)

Dessa forma, agora que o seu formulário já está pronto e aplicando as validações de negócio, você precisará pegar os dados informados nos campos do mesmo para salvá-los localmente e exibi-los em uma tabela.

Para fazer isso, você terá que adicionar um evento para ouvir a submissão do formulário, e esse evento coletará os valores informados em todos os campos do formulário e montará um objeto representando uma pessoa (com nome e data de nascimento).

Com os dados em mãos, salve-os localmente de forma persistente, para não perdê-los.

Por fim, leia os dados salvos localmente e exiba-os em uma tabela quando a página for recarregada ou fechada e reaberta.

Lembra que no primeiro e-mail eu falei que você implementaria na sua página um CRUD completo? A letra ‘C’ de ‘CRUD’ corresponde a ‘create’ (criar), e a letra ‘R’ a ‘read’ (ler), duas das operações básicas de armazenamento persistente.