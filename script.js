// script.js

// Exibir alerta de boas-vindas ao entrar na Home
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname;
  
    if (currentPage.includes("index.html") || currentPage.endsWith("/")) {
      alert("Bem-vindo ao site sobre a ISO 25010!");
    }
  });

    // Função de pesquisa de características (pode ser expandida)
  function pesquisarCaracteristica() {
    const termo = prompt("Digite o nome de uma característica da ISO 25010:");
    const elementos = document.querySelectorAll(".characteristic");
  
    let encontrou = false;
  
    elementos.forEach(el => {
      if (el.textContent.toLowerCase().includes(termo.toLowerCase())) {
        el.scrollIntoView({ behavior: "smooth" });
        el.style.border = "2px solid #1abc9c";
        encontrou = true;
      } else {
        el.style.border = "none";
      }
    });
  
    if (!encontrou) {
      alert("Característica não encontrada.");
    }
  }
  
  // Adicionar realce ao menu da página atual
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const path = window.location.pathname;
  
    navLinks.forEach(link => {
      if (path.includes(link.getAttribute("href"))) {
        link.style.backgroundColor = "#1abc9c";
      }
    });
  });
  

  