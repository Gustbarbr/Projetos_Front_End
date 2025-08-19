// Movendo-se pelo DOM
console.log(document.body);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// Selecionar por tag
const listItems = document.getElementsByTagName("li");
console.log(listItems);

// Selecionar por ID
const title = document.getElementById("title");
console.log(title);

// Selecionar por classe
const products = document.getElementsByClassName("product");
console.log(products);

// Selecionar por CSS
const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

// Insert Before
const p = document.createElement("p");
const header = title.parentElement;
header.insertBefore(p, title);

// Append Child
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// Replace Child
const h2 = document.createElement("h2");

h2.textContent = "Meu novo título";

header.replaceChild(h2, title);

// Criando nó de texto
const myText = document.createTextNode("Agora vamos colocar mais um título");
console.log(myText);
const h3 = document.createElement("h3");
h3.appendChild(myText);
console.log(h3);
mainContainer.appendChild(h3);

// Ler e alterar atributos: "get" lê o atributo e "set" altera
const firstLink = navLinks.querySelector("a");
console.log(firstLink);
firstLink.setAttribute("href", "https://www.google.com");
console.log(firstLink.getAttribute("href"));
firstLink.setAttribute("target", "_blank");

// Informação de largura e altura
const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// Informação da posição do elemento
const product1 = products[0];
console.log(product1.getBoundingClientRect());

// Alterar estilos
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";

// Estilizando vários itens
for (const li of listItems) {
  li.style.backgroundColor = "red";
}
