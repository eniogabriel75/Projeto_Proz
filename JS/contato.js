
function abrirModal(abrirModal){
    let modal = document.getElementById(abrirModal);
    modal.style.display = 'block';
    document.body.style.overflow = "hidden";
};

function fecharModal(fecharModal){
    let modal = document.getElementById(fecharModal);
    modal.style.display = 'none';
    document.body.style.overflow = "auto";
};

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
  }

  