// Métodos: São como propriedades, mas contém uma função
const animal = {
  name: "Onça",
  rugir: function () {
    console.log("Roar");
  },
};

console.log(animal.name);
animal.rugir();

const pessoa = {
  name: "Gustavo",
  getName: function () {
    return this.name;
  },
  setName: function (newName) {
    this.name = newName;
  },
};

console.log(pessoa.name);
console.log(pessoa.getName());
pessoa.setName("João");
console.log(pessoa.getName());

// Prototype: É como uma herança, onde os filhos herdam propriedades e métodos dos pais
// Fallback: Quando uma propriedade não existe em um dado/objeto, ela é procurada em seu ancestral
const txt = "ABC";

console.log(Object.getPrototypeOf(txt));

const myObj = {
  a: "b",
};

console.log(Object.getPrototypeOf(myObj) === Object.prototype);
const mySecondObj = Object.create(myObj);
console.log(mySecondObj);
console.log(mySecondObj.a);
console.log(Object.getPrototypeOf(mySecondObj) === myObj);

// Classes: Serve como molde dos objetos
const cachorro = {
  raca: null,
  patas: 4,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";
console.log(bulldog);

// Funções construtoras
function criarCachorro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const bob = criarCachorro("Bob", "Vira-lata");
console.log(bob);

const jack = ("Jack", "Bulldog");
console.log(Object.getPrototypeOf(jack));

function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");
console.log(husky);

// Adicionar métodos em funções construtoras
Cachorro.prototype.uivar = function () {
  console.log("Auuuuuuuuuu!");
};

husky.uivar();

// Classes ES6
class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const jeff = new CachorroClasse("Jeff", "Labrador");
console.log(jeff);

class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descreverCaminhao() {
    console.log(`Esse caminão tem ${this.eixos} e é da cor ${this.cor}.`);
  }
}

const scania = new Caminhao(6, "azul");
console.log(scania);
scania.descreverCaminhao();

// -> Maneira errada <-
Caminhao.motor = 4;

const vw = new Caminhao(4, "branco");
console.log(vw);
console.log(vw.motor);

// -> Maneira certa <-
Caminhao.prototype.motor = 4.0;
const c4 = new Caminhao(4, "branco");
console.log(c4.motor);

// Override
class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const gustavo = new Humano("Gustavo", 21);
console.log(gustavo);

Humano.prototype.idade = "Não definida";

console.log(gustavo.idade);
console.log(Humano.prototype.idade);

// Symbol: Propriedade única e imutável
class Aviao {
  constructor(marca, turbinas) {
    this.marca = marca;
    this.turbinas = turbinas;
  }
}

const asas = Symbol();

Aviao.prototype[asas] = 2;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);
console.log(boeing[asas]);

// Getter e Setter: O get é usado para exibir um valor e o set é usado para alterar o valor
class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descreverCaminhao = descricao;
    this.tags = tags;
  }

  get exibirTitulo() {
    return `Você está lendo: ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const tagsArrays = tags.split(", ");
    this.tags = tagsArrays;
  }
}

const myPost = new Post("Algum post", "É um post sobre programação");
console.log(myPost);
console.log(myPost.titulo);

myPost.adicionarTags = "programação, javascript, js";
console.log(myPost);

// Herança: Uma classe pode herdar a propriedade de outa por meio da herança.
// A palavra-chave "extends" para adicionar a classe que receberá as propriedades e a palavra-chave "super" na que irá enviar
class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobo extends Mamifero {
  constructor(patas, nome) {
    super(patas, patas);
    this.nome = nome;
  }
}

const shark = new Lobo(4, "Shark");
console.log(shark);
console.log(shark.patas);

// Instanceof: Verifica se um objeto é pai de outro
console.log(shark instanceof Lobo);
console.log(Lobo instanceof Mamifero);
console.log(new Lobo(4, "Teste") instanceof Mamifero);
console.log(new Post("a", "b") instanceof Lobo);
