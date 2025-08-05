// Arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista);

const itens = ["Gustavo", true, 21, 70.2];

console.log(itens);

// Propriedades
const numbers = [1, 2, 3];

console.log(numbers.length);
console.log(numbers["length"]);

const name = "Gustavo";

console.log(name.length);

// Métodos
const otherNumbers = [4, 5, 6, 7];
const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const txt = "texto maiúsculo";
console.log(txt.toUpperCase());

// Objetos
const person = {
  name: "Gustavo",
  age: 21,
  job: "programador",
};

console.log(person);
console.log(person.name);

// Criando e deletando propriedades
const car = {
  barnd: "VW",
  model: "Gol",
  km: 2000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// Assign
const obj = {
  a: "Teste",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: [],
};

Object.assign(obj2, obj); // Adiciona as informações do "obj" ao "obj2"

console.log(obj);
console.log(obj2);

// Keys
console.log(Object.keys(obj));
console.log(Object.keys(obj2));

console.log(Object.entries(obj));

// Mutação: Criar um objeto a partir de outro
const a = {
  name: "Gustavo",
};

const b = a; // Mutação

console.log(a);
console.log(b);

console.log(a === b);

a.age = 21;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// Loop em arrays
const users = ["Pedro", "João", "Sebastião"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando os usuários: ${users[i]}`);
}

// Push e Pop: Adiciona e remove do fim do array
const array = [1, 2, 4];

console.log(array);
array.pop();

console.log(array);

array.push(3);

console.log(array);

// Unshift e Shift: Adiciona e remove do início do array
const array2 = [70, 10, 20, 30];

console.log(array2);

array2.shift();

console.log(array2);

array2.unshift(0);

console.log(array2);

// IndexOf e lastIndexOf
const myElements = ["Morango", "Maçã", "Uva"];

console.log(myElements[2]);
console.log(myElements.indexOf("Uva"));

console.log(myElements[0]);
console.log(myElements.lastIndexOf("Morango"));

// Slice
const testeSlice = ["a", "b", "c", "d", "e"];
console.log(testeSlice);

const subArray = testeSlice.slice(2, 4);
console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(1);
console.log(subArray3);

// Foreach: Funciona como loop, porém percorrendo cada elemento de um array
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
  console.log(`O número é ${numero}`);
});

const posts = [
  { title: "Primeiro post", category: "PHP" },
  { title: "Segundo post", category: "JavaScript" },
  { title: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
  console.log(`Exibindo post: ${post.title}, da categoria ${post.category}`);
});

// Includes: Verifica se o array tem um elemento
const brands = ["VW", "Volvo", "Chevrolet", "Fiat"];

console.log(brands.includes("VW"));

console.log(brands.includes("Nissan"));

if (brands.includes("Chevrolet")) {
  console.log("Há carros da marca Chevrolet!");
}

// Reverse: Inverte os elementos de um array (Modifica o array original)
const wordsReverse = ["G", "F", "E", "D", "C", "B", "A"];

console.log(wordsReverse);

wordsReverse.reverse();

console.log(wordsReverse);

// Trim: Remove tudo que não seja texto de uma string (Não modifica o texto original)
const trimTest = " testando \n";

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length);

// Padstart: Insere um texto no início da string
const padStartTest = "1";

console.log(padStartTest);
console.log(padStartTest.padStart(2, "0"));

// Split
const splitTest = "O rato roeu a roupa do rei de Roma";

console.log(splitTest);

const splitTest2 = splitTest.split(" ");

console.log(splitTest2);

// Join
const joinTest = splitTest2.join(" ");

const itensParaComprar = ["Mouse", "Teclado", "Headset"];

const fraseDeCompra = `Preciso comprar: ${itensParaComprar.join(", ")}`;

console.log(fraseDeCompra);

// Repeat

const repeatTexto = "Testando";

console.log(repeatTexto.repeat(3));

// Rest Operator/Rest Parameters: Deixa o argumeto de uma função ondefinida, podendo deixar mais amplo o que ela receberá
const somaInfinita = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

console.log(somaInfinita(1, 2, 3));
console.log(
  somaInfinita(1, 21, 4345, 42343, 6565, 7687, 5454, 232, 132, 34546)
);

// For...of : Semelhante ao for, porém o número de repetições é baseado no tamanho do array
const somaInfinita2 = (...args) => {
  let total = 0;
  for (num of args) {
    total += num;
  }

  return total;
};

console.log(somaInfinita2(1, 2, 3, 4));
console.log(somaInfinita2(100, 892109, 9834, 908219, 32083, 4039, 291));

// Destructuring: Permite desestruturar algum dado, criando variáveis a partir de suas propriedades
const userDetails = {
  firstName: "Gustavo",
  lastName: "Barbosa",
  job: "Programador",
};

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

// Renomear variáveis
const { firstName: primeiroNome, asd } = userDetails;
console.log(firstName);
console.log(asd);

const myList = ["Avião", "Submarino", "Navio", "Moto"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// JSON: JavaScript Object Notation é utilizada para comunicação entre Front-End e API
const myJson =
  '{"name": "Gustavo", "age": 21, "skills": ["PHP", "JavaScript", "Python"]}';

console.log(myJson);

// Conversão de JSON
const myObject = JSON.parse(myJson);
console.log(myObject);
console.log(myObject.name);

myObject.isOpenToWork = true;
console.log(myObject);
const myNewJson = JSON.stringify(myObject);
console.log(myNewJson);
