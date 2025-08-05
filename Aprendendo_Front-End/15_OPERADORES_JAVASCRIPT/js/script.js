// Ctrl + : -> comentário

// Tipo Number
console.log(2);
console.log(typeof 2);

// Operações aritméticas
console.log(5 + 2);
console.log(25 - 15);
console.log(7 * 9);
console.log(10000 / 500);
console.log(10 * (8 + 2));

// Special Numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log("olá" * 2);
console.log(typeof NaN);

// Strings
console.log("Uma string");
console.log("Mais uma");
console.log(`Outra`);
console.log(typeof "Ola");
console.log("Texto em \nduas linhas");
console.log("Texto com \tespaçamento");

// Concatenação: Unir duas ou mais Strings
console.log("Meu" + " texto" + " concatenado");

// Template Strings (Interpolação): Executa o JS dentro da String (obrigatório uso de crase)
console.log(`A soma de 1 + 1 é: ${1 + 1}`);

// Booleano
console.log(true);
console.log(5 > 10);
console.log(100 < 1000);
console.log(typeof false);

// Comparações
console.log(`Valor maior: ${75 > 25}`);
console.log(`Valor menor: ${425 < 1000}`);
console.log(`Valores iguais: ${10 == 10}`);
console.log(`Valores diferentes: ${999 != 111}`);
console.log(`Valores idênticos: ${100 === 100}`);

// Comparação de idêntico: Funcionam como igual ou diferente, porém levam em conta o tipo do dado
console.log(9 == "9");
console.log(9 === "9");
console.log(1 != "1");
console.log(1 !== "1");

// Operadores lógicos
console.log(1 + 1 == 2 && 2 + 2 == 4);
console.log(1 + 1 == 3 || 3 + 3 == 6);
console.log(9 != 9);

// Empty values
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);

// Conversão de tipo automático: O JS converte silenciosamente o tipo de dados em algumas operações
console.log(5 * null);
console.log("5" - 3);
console.log("5" + 1);
console.log("a" * "b");