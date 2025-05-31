document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-description");
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const description = btn.nextElementSibling;
        description.classList.toggle("show");
  
        btn.textContent = description.classList.contains("show")
          ? "Ocultar descripción"
          : "Ver descripción";
      });
    });
  });
  