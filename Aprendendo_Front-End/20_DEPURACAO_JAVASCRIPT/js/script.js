// Strict: É um modo de desenvolvimento que deixa o JS mais rigoroso na hora de programar.

"use strict";
/*
opa = "teste"
const undefined = 10
delete [].lenght
*/

// Debugger
let a = 1;
let b = 2;

if (a == 1) {
  a = b + 2;
}

debugger;

for (let i = 0; i < caches; i++) {
  a = a + 2;
}

console.log("Executou o loop!");

debugger;

// Tratamento de dados por função
function checkNum(n) {
  const result = Number(n);

  if (Number.isNaN(result)) {
    console.log("Valor incorreto!");
    return;
  }

  console.log("Valor correto!");
  return result;
}

checkNum(5);
checkNum("10");
checkNum({});
checkNum("teste");

// Exceptions
let x = 10;

if (x != 11) {
  //throw new Error("Não é 11!");
}

// Try catch: Tenta executar algo em "try", se não conseguir, entra em "catch"
try {
  const soma = x + y;
} catch (error) {
  console.log(`Erro no programa: ${error}`);
}

// Finally: Vai depois de "try" e "catch", ele é executado independente de haver ou não erro no "try"
try {
  const value = checkNum("asd");

  if (!value) {
    throw new Error("Valores inválidos!");
  }
} catch (error) {
  console.log(`Ocorreu um problema em ${error}`);
}

// Assertions: São quando os tratamentos de valores passados pelo usuário, geram um erro
function checkArray(arr) {
  if (arr.length === 0) {
    throw new Error("O array precisa ter elementos");
  } else {
    console.log(`O array tem: ${arr.length} elementos`);
  }
}

checkArray([1, 2, 3]);
