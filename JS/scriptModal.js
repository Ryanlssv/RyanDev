const projetos = [
    {
        id: 1,
        imagem:" ./src/img-cards/ArmazemCard.png ",
        titulo: "Armazem da Eletronica",
        descricaoCurta: "Este é um site de e-commerce criado com HTML, CSS e JS.",
        descricaoCompleta: "Este é um site de e-commerce criado com HTML, CSS e JS."
    },
    {
        id: 2,
        imagem:" ./src/img-cards/rockstars.jpg",
        titulo: "Projeto 2",
        descricaoCurta: "Clone da Rockstar...",
        descricaoCompleta: "Recriação do site da Rockstar usando HTML, CSS e JS."
    },
    {
        id: 3,
        imagem:" ./src/img-cards/Exemplo.jpg ",
        titulo: "Projeto 3",
        descricaoCurta: "Clone da Rockstar...",
        descricaoCompleta: "Recriação do site da Rockstar usando HTML, CSS e JS."
    },
    {
        id: 4,
        imagem:" ./src/img-cards/logo.png ",
        titulo: "Projeto 4",
        descricaoCurta: "Clone da Rockstar...",
        descricaoCompleta: "Recriação do site da Rockstar usando HTML, CSS e JS."
    }
];

// Função para carregar os projetos na tela
function carregarProjetos() {
    let container = document.getElementById("projetos-container");
    projetos.forEach(projeto => {
        let div = document.createElement("div");
        div.classList.add("projeto");
        div.innerHTML = `
         <img class="product-image" style="width: 100%; border-radius: 15px;  " src="${projeto.imagem}" alt="${projeto.titulo}">
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricaoCurta}</p>
        `;
        div.onclick = () => abrirModal(projeto);
        container.appendChild(div);
    });
}

// Função para abrir o modal
function abrirModal(projeto) {
    document.getElementById("modal-titulo").innerText = projeto.titulo;
    document.getElementById("modal-descricao").innerText = projeto.descricaoCompleta;
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-imagem").innerText = projeto.imagem;
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

// Carregar os projetos ao carregar a página
carregarProjetos();