function MinhaFuncao() {
  console.log("Teste");
}

MinhaFuncao();

const funcaoEmVariavel = function () {
  console.log("Função em variável");
};

funcaoEmVariavel();

const a = 10,
  b = 20,
  c = 30;

function soma(n1, n2) {
  return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

console.log(soma(a, c));

// Escopo aninhado
let m = 10;

function escopoAninhado() {
  let m = 20;
  if (true) {
    let m = 30;
    if (true) {
      let m = 40;
      console.log(m);
    }
    console.log(m);
  }
  console.log(m);
}
escopoAninhado();

console.log(m);

// Arrow function
const testeArrow = () => {
  console.log("Essa é uma arrow function");
};

testeArrow();

const parOuImpar = (n) => {
  if (n % 2 === 0) {
    console.log("Par");
    return;
  }
  console.log("Ímpar");
};

parOuImpar(5);
parOuImpar(10);

const raizQuadrada = (x) => {
  return Math.sqrt(x);
};

console.log(raizQuadrada(16));

const raizQuadrada2 = (x) => Math.sqrt(x);

console.log(raizQuadrada2(25));

// Argumeto default
const customGreeting = (name, greet = "Olá") => {
  return `${greet}, ${name}!`;
};

console.log(customGreeting("Gustavo"));
console.log(customGreeting("Gustavo", "Bom dia"));

// Closure: Permite acessar um trecho específico dentro de uma função

function someFunction() {
  let txt = "Alguma coisa";

  function display() {
    console.log(txt);
  }

  display();
}

someFunction();

const multiplicationClosure = (n) => {
  return (m) => {
    return n * m;
  };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));
