document.addEventListener("DOMContentLoaded", function() {
    const link = document.querySelector(".contact-link");
    const animatedElement = document.querySelector(".animated-element");
  
    if (animatedElement) {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        animatedElement.classList.add("animated"); // Adiciona a classe "animated"
      });
    }
});
