// Seleciona elementos
const botaoAcessibilidade = document.getElementById("botao-acessibilidade");
const opcoesAcessibilidade = document.getElementById("opcoes-acessibilidade");
const botaoContraste = document.getElementById("alterna-contraste");
const botaoAumentarFonte = document.getElementById("aumentar-fonte");
const botaoDiminuirFonte = document.getElementById("diminuir-fonte");

// Estado inicial
let tamanhoFonte = 100;

// Abrir/fechar menu de acessibilidade
botaoAcessibilidade.addEventListener("click", () => {
    opcoesAcessibilidade.classList.toggle("apresenta-lista");
    botaoAcessibilidade.classList.toggle("rotacao-botao");
});

// Alternar alto contraste
botaoContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");

    // Atualiza o atributo ARIA para acessibilidade
    const pressed = botaoContraste.getAttribute("aria-pressed") === "true";
    botaoContraste.setAttribute("aria-pressed", !pressed);
});

// Aumentar fonte
botaoAumentarFonte.addEventListener("click", () => {
    tamanhoFonte += 10;
    document.body.style.fontSize = tamanhoFonte + "%";
});

// Diminuir fonte
botaoDiminuirFonte.addEventListener("click", () => {
    if (tamanhoFonte > 60) { // limite mínimo
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
});

// ScrollReveal para animações suaves
ScrollReveal().reveal("section", {
    delay: 200,
    distance: "50px",
    duration: 800,
    easing: "ease-in-out",
    origin: "bottom"
});
