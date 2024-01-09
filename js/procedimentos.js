const saibaMais = document.querySelector(".saiba-mais");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkVideo = video.src;

function alternarModal() {
  modal.classList.toggle("aberto");
}

saibaMais.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", linkVideo);
});

botaoFecharModal.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", "");
});
