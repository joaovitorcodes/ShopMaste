// script.js

document.addEventListener("DOMContentLoaded", function () {
    const linkProdutos = document.getElementById("link-produtos");

    // Evento para página de produtos
    linkProdutos.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "produtos.html";
    });

    // Carregar notícias se estiver na página de notícias
    if (document.getElementById("noticias")) {
        carregarNoticias();
    }
});

function carregarNoticias() {
    const container = document.getElementById("noticias");
    const loadingMsg = container.querySelector(".loading-msg");

    // Dados simulados (mock) de notícias
    const noticias = [
        {
            titulo: "Economia global cresce 3% em 2025",
            descricao: "Estudos mostram que a economia mundial está em crescimento constante este ano, impulsionada por avanços tecnológicos.",
            data: "2025-05-18"
        },
        {
            titulo: "Nova tecnologia de baterias promete revolucionar veículos elétricos",
            descricao: "Uma startup desenvolveu uma bateria com maior capacidade e tempo de recarga reduzido, trazendo esperança para o setor automotivo.",
            data: "2025-05-17"
        },
        {
            titulo: "Exploração espacial: missões privadas ganham força",
            descricao: "Empresas privadas estão lançando missões cada vez mais ambiciosas para exploração da Lua e Marte.",
            data: "2025-05-16"
        }
    ];

    // Remove a mensagem de carregamento
    if (loadingMsg) {
        loadingMsg.remove();
    }

    noticias.forEach(noticia => {
        const noticiaDiv = document.createElement("div");
        noticiaDiv.classList.add("noticia-item");

        noticiaDiv.innerHTML = `
            <h2 class="noticia-titulo">${noticia.titulo}</h2>
            <p class="noticia-descricao">${noticia.descricao}</p>
            <span class="noticia-data">Publicado em: ${formatarData(noticia.data)}</span>
        `;

        container.appendChild(noticiaDiv);
    });
}

function formatarData(dataStr) {
    const data = new Date(dataStr);
    return data.toLocaleDateString('pt-BR', {
        day: '2-digit', month: 'long', year: 'numeric'
    });
}
