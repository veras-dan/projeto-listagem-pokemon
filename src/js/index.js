

const botaoAterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAterarTema.addEventListener("click", () => {
    body.classList.add("modo-escuro");
    imagemBotaoTrocaDeTema.setAttribute("src", "src/images/moon.png");

    
});