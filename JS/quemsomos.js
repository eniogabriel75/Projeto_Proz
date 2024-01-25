document.addEventListener("DOMContentLoaded", function () {
  var imagens = document.querySelectorAll(".imagemEsquerdaComSombra");

  imagens.forEach(function (imagem) {
    imagem.addEventListener("mouseover", function () {
      imagem.classList.add("sombra-imagem-direita-baixo");
    });

    imagem.addEventListener("mouseout", function () {
      imagem.classList.remove("sombra-imagem-direita-baixo");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var imagens = document.querySelectorAll(".imagemDireitaComSombra");

  imagens.forEach(function (imagem) {
    imagem.addEventListener("mouseover", function () {
      imagem.classList.add("sombra-imagem-esquerda-baixo");
    });

    imagem.addEventListener("mouseout", function () {
      imagem.classList.remove("sombra-imagem-esquerda-baixo");
    });
  });
});
