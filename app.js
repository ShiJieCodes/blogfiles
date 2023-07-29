const modals = document.querySelectorAll(".modal");

modals.forEach(function (modal) {
  const btns = modal.querySelector(".modal-btns");
  btns.addEventListener("click", function () {
    modals.forEach(function (item) {
      if (item !== modal) {
        item.classList.remove("show-text");
      }
      modal.classList.toggle("show-text");
    });
  });
});
