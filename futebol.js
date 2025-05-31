// futebol.js

// Lista de notícias reais — basta trocar pelos links e resumos reais
const noticias = [
  {
    titulo: "Neymar acelera recuperação para retornar à Seleção",
    resumo: "Neymar está na pré-lista de Carlo Ancelotti para os jogos das Eliminatórias da Copa do Mundo de 2026 contra Equador e Paraguai. Após uma grave lesão em outubro de 2023, ele pode reaparecer pelo Santos nesta quinta-feira na Copa do Brasil contra o CRB. Seu contrato com o clube vai até 30 de junho, e a renovação até 2026 está em negociação. Desde seu retorno, Neymar tem enfrentado polêmicas extracampos e múltiplas lesões, limitando sua participação a nove jogos, com três gols e três assistências.",
    link: "https://as.com/futbol/internacional/ancelotti-acelera-a-neymar-n/?utm_source=chatgpt.com" // troque aqui
  },
  {
    titulo: "Kaká se coloca à disposição para trabalhar com Ancelotti na Seleção",
    resumo: "O ex-jogador Kaká expressou interesse em integrar a comissão técnica de Carlo Ancelotti na Seleção Brasileira. Ele afirmou estar pronto para assumir um papel técnico, destacando sua experiência ao lado de Ancelotti no Milan. No entanto, o novo presidente da CBF, Samir Xaud, negou ter mantido contatos com Kaká ou Cafu sobre possíveis cargos na equipe técnica.",
    link: "https://as.com/futbol/internacional/kaka-listo-para-ancelotti-n/?utm_source=chatgpt.com" // troque aqui
  },
  {
    titulo: "Samir Xaud é eleito novo presidente da CBF",
    resumo: "Samir Xaud foi eleito presidente da Confederação Brasileira de Futebol (CBF), sucedendo Ednaldo Rodrigues. Com apoio de 25 das 27 federações estaduais, Xaud assume o cargo com mandato até 2029. Ele prometeu estabilidade institucional, profissionalização do futebol e apoio às seleções nacionais, incluindo a autonomia de Carlo Ancelotti como técnico da Seleção Brasileira.",
    link: "https://as.com/futbol/internacional/ancelotti-respira-la-cbf-tiene-nuevo-presidente-n/?utm_source=chatgpt.com" // troque aqui
  },
  {
    titulo: "Ele voltou para os gramados",
    resumo: "Neymar retornou aos gramados pelo Santos após se recuperar de uma lesão na coxa esquerda sofrida em abril de 2025. A lesão ocorreu durante a vitória por 2 a 0 sobre o Atlético-MG, quando o atacante sentiu dores aos 32 minutos do primeiro tempo e precisou ser substituído. Exames confirmaram uma lesão no músculo semimembranoso da coxa esquerda, distinta da lesão anterior na mesma região .",
    link: "https://www.correiobraziliense.com.br/esportes/2025/04/7109622-de-volta-aos-gramados-neymar-cobra-personalidade-ao-santos-apos-derrota-no-maracana.html?utm_source=chatgpt.com" // troque aqui
  }
];

// Carregar notícias
function carregarNoticias() {
  const newsList = document.getElementById("news-list");

  noticias.forEach((noticia, index) => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");

    const title = document.createElement("h3");
    title.textContent = noticia.titulo;

    const resumo = document.createElement("p");
    resumo.textContent = noticia.resumo;

    const button = document.createElement("button");
    button.textContent = "Ver mais";
    button.addEventListener("click", () => abrirModal(index));

    newsItem.appendChild(title);
    newsItem.appendChild(resumo);
    newsItem.appendChild(button);

    newsList.appendChild(newsItem);
  });
}

// Abrir Modal
function abrirModal(index) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");
  const modalLink = document.getElementById("modal-link");

  const noticia = noticias[index];

  modalTitle.textContent = noticia.titulo;
  modalContent.textContent = noticia.resumo;
  modalLink.href = noticia.link;

  modal.classList.remove("hidden");
}

// Fechar Modal
function fecharModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
}

// Clique no botão fechar
document.getElementById("modal-close").addEventListener("click", fecharModal);

// Clique fora do conteúdo do modal
window.addEventListener("click", function (event) {
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");
  if (event.target === modal) {
    fecharModal();
  }
});

// Pressionar tecla Esc
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    fecharModal();
  }
});

// Carregar notícias quando a página abrir
window.addEventListener("load", carregarNoticias);