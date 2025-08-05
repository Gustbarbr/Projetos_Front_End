// Salvar valores na memória (variáveis)
let nome = "Gustavo";
console.log(nome);

nome = "Gustavo Gomes";
console.log(nome);

const idade = 21;
console.log(idade);

let a = 1,
  b = 2,
  c = 3;
console.log(a, b, c);

// Prompt (input)
const altura = prompt("Insira a sua altura: ");
console.log(altura);

// Alert: Abre um pop-up na tela com uma mensagem
alert("Olá!");
alert(`Sua altura é ${altura}.`);

// Math
console.log(Math.max(1, 10, 5, 9, 2));
console.log(Math.floor(5.5));
console.log(Math.ceil(5.5));

// Console
console.error("Erro!");
console.warn("Aviso!");

// If
if (1 < 2) console.log("1 é menor que 2!");

// Else
if (1 > 3) alert("1 é maior que 3!(?)");
else console.log("1 é menor que 3!");

// Else if
if (10 > 1000) alert("10 é maior que 1000!(?)");
else if (10 < 1000) console.log("10 é menor que 1000!");
else alert("10 é igual a 1000!(?)");

// While
const num = 10;
let cont = 0;

while (cont <= 10) {
  console.log(cont);
  cont += 1;
}

// Do While

let x = 5;

do {
  console.log(x);
  x--;
} while (x > 0);

// For
for (let i = 0; i < 5; i++) {
  console.log(`Valor de "i" é ${i}.`);
}

// Forçando a saida de um loop
for (let o = 0; o <= 100; o++) {
  console.log(`O valor de "o" é ${o}.`);
  if (o == 10) {
    console.log(`O valor de "o" é igual a ${o}`);
    break;
  }
}

// Pulando a execução de um loop
for (let y = 0; y < 10; y = y + 1) {
  if (y % 2 === 0) {
    console.log("Número par");
    continue;
  }
}

// Switch (usado para evitar excesso de if else)
const job = "Juiz";

switch (job) {
  case "Pintor":
    console.log("Você é um pintor");
    break;
  case "Juiz":
    console.log("Você é um juiz");
    break;
  case "Programador":
    console.log("Você é um programador");
    break;
  default:
    console.log("Profissão não encontrada");
}
