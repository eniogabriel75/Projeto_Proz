const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const simpleForm = document.querySelector("#simple-form");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

const handleFormSubmit = async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (!name || !email || !phone) {
    Swal.fire({
      icon: "error",
      title: "Erro",
      text: "Por favor, preencha todos os campos obrigatórios.",
    });
    return;
  }
  // Usando SweetAlert para a mensagem de confirmação
  const result = await Swal.fire({
    icon: "success",
    title: "Sucesso",
    text: "Formulário enviado com sucesso!\nEntraremos em contato com você para confirmação.",
    showConfirmButton: false,
    timer: 3000,
  });

  if (result.dismiss === Swal.DismissReason.timer) {
    toggleModal();
  }
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", toggleModal);
});

simpleForm.addEventListener("submit", handleFormSubmit);
