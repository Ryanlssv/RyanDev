function abrirModal(elemento) {
    let titulo = elemento.getAttribute("data-titulo");
    let descricao = elemento.getAttribute("data-descricao");
    let site = elemento.getAttribute("data-site");
    let github = elemento.getAttribute("data-github");

    document.getElementById("modal-titulo").innerText = titulo;
    document.getElementById("modal-descricao").innerText = descricao;
    document.getElementById("modal-site").href = site;
    document.getElementById("modal-github").href = github;

    let modal = document.getElementById("modal");
    modal.style.display = "flex";
    modal.classList.remove("fechando"); // Remove a classe de fechamento se existir
}

function fecharModal() {
    let modal = document.getElementById("modal");

    // Adiciona a classe para animação de saída
    modal.classList.add("fechando");

    // Espera a animação de saída terminar antes de esconder o modal
    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("fechando");
    }, 300); // 300ms deve ser o mesmo tempo da animação
}

// Fecha ao clicar fora do conteúdo do modal
document.getElementById("modal").addEventListener("click", function (event) {
    if (event.target === this) {
        fecharModal();
    }
});
