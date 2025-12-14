$(document).ready(function () {
  // 1. Inicializa Animações de Scroll (AOS)
  AOS.init({ once: true, offset: 50 });

  // 2. Efeito de rolagem na Navbar (Glass Effect)
  $(window).scroll(function () {
    if ($(window).scrollTop() > 20) {
      $("nav").addClass("scrolled");
    } else {
      $("nav").removeClass("scrolled");
    }
  });

  // 3. Inicialização do Dropdown de Usuário (Configurado para clique)
  $(".dropdown-trigger").dropdown({
    coverTrigger: false, // Menu abre ABAIXO do ícone, não em cima
    constrainWidth: false, // Menu pode ser mais largo que o ícone
    alignment: "right", // Alinha pela direita (evita sair da tela em telas pequenas)
    hover: false, // Exige clique (melhor para UX Mobile/Touch)
    closeOnClick: true, // Fecha ao clicar em um item

    // Callbacks para feedback visual
    onOpenStart: function (el) {
      $(el).addClass("dropdown-active");
    },
    onCloseEnd: function (el) {
      $(el).removeClass("dropdown-active");
    },
  });
});
