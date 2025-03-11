function abrirModal(elemento) {
    // Pegando os atributos da div clicada
    let titulo = elemento.getAttribute("data-titulo");
    let descricao = elemento.getAttribute("data-descricao");

    // Atualizando o modal com os dados
    document.getElementById("modal-titulo").innerText = titulo;
    document.getElementById("modal-descricao").innerText = descricao;

    // Exibindo o modal
    document.getElementById("modal").style.display = "flex";
}

function fecharModal(event) {
    let modal = document.getElementById("modal");
    let modalContent = document.querySelector(".modal-content");

    // Fecha ao clicar fora do conteúdo ou no botão fechar
    if (!event || event.target === modal) {
        modal.style.display = "none";
    }
}