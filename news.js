// Simulando carregamento de notícias
document.addEventListener("DOMContentLoaded", () => {
    const noticiasSection = document.getElementById("noticias");
    const loadingMsg = document.querySelector(".loading-msg");

    // Simulação de dados de notícias
    const noticias = [
        {
            titulo: "Nova tecnologia revoluciona o mercado!",
            conteudo: "Pesquisadores anunciam uma inovação que promete mudar o mundo digital."
        },
        {
            titulo: "Esportes: Time conquista campeonato histórico",
            conteudo: "Em uma partida emocionante, o time venceu nos últimos minutos."
        },
        {
            titulo: "Economia em alta",
            conteudo: "Indicadores mostram crescimento econômico acima do esperado."
        }
    ];

    // Simular tempo de carregamento
    setTimeout(() => {
        loadingMsg.style.display = "none";

        // Adicionar notícias na seção
        noticias.forEach(noticia => {
            const noticiaItem = document.createElement("div");
            noticiaItem.classList.add("noticia-item");

            noticiaItem.innerHTML = `
                <h2>${noticia.titulo}</h2>
                <p>${noticia.conteudo}</p>
            `;

            noticiasSection.appendChild(noticiaItem);
        });
    }, 1500); // 1,5 segundos de "carregamento"
});