// main.js

document.addEventListener("DOMContentLoaded", () => {
    const btnSubmit = document.getElementById("btn-submit");
    const btnCancel = document.getElementById("btn-cancel");
    const btnBack = document.getElementById("btn-back");
  
    if (btnSubmit) {
      btnSubmit.addEventListener("click", () => {
        // Redirige a la página de creación de grupos (por ejemplo Interfaz13.html)
        window.location.href = "Interfaz13.html";
      });
    }
  
    if (btnCancel) {
      btnCancel.addEventListener("click", () => {
        const confirmar = confirm("¿Seguro que quieres cancelar?");
        if (confirmar) {
          alert("Grupo cancelado.");
        }
      });
    }
  
    if (btnBack) {
      btnBack.addEventListener("click", () => {
        window.history.back();
      });
    }
  });
  