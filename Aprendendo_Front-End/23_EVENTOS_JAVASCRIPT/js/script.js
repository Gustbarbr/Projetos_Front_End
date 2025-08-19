// Adicionando um evento
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
  console.log("clicou aqui!");
});

// Removendo um evento
const secondBtn = document.querySelector("#btn");
function imprimirMensagem() {
  console.log("teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

// Argumento do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.srcElement);
  console.log(event.offsetX);
  console.log(event.pointerType);
  console.log(event.target);
});

// Propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Evento 2");
});

// Removendo evento padrão: Impede a troca de página por exemplo
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Não trocou de página!");
});

// Eventos de tecla
document.addEventListener("keyup", (e) => {
  console.log(`Soltou a tecla ${e.key}`);
});

// Eventos de mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
  console.log("Pressionou o botão");
});

mouseEvents.addEventListener("mouseup", () => {
  console.log("Soltou o botão");
});

// Movimento do mouse
document.addEventListener("mousemove", (e) => {
  console.log(`No eixo X: ${e.x}`);
  console.log(`No eixo Y: ${e.y}`);
});

// Eventos por scroll
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 200) {
    console.log("Passamos de 200px!");
  }
});

// Focus: Ativa quando um elemento é focado
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
  console.log("Entrou no input");
});
// Blur: Ativa quando um elemento é desfocado
input.addEventListener("blur", (e) => {
  console.log("Saiu do input");
});

// Load: Ocorre ao carregar a página
window.addEventListener("load", (e) => {
  console.log("A página carregou!");
});
// Unload: Ocorre antes de sair da página
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "Teste";
});

// Debounce: Faz o evento disparar menos vezes
const debounce = (f, delay) => {
  let timeout;

  return (...arguments) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      f.apply(arguments);
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("Executando a cada 400ms");
  }, 400)
);
