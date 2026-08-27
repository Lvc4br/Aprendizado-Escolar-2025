/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        // Adiciona ou remove a classe show-menu ao menu de navegação
        nav.classList.toggle('show-menu');
        // Alterna a classe para o ícone de menu
        toggle.classList.toggle('show-icon');
    });
};

showMenu('nav-toggle', 'nav-menu');

/*=============== efect sticky ===============*/

// Ativa visual sticky na nav ao rolar
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");

  if (!nav) return;

  if (window.scrollY > 0) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});



//slide


const items = document.querySelectorAll('.slider .list .item');
const totalItems = items.length; // Total de itens na lista
// Define o índice atual para a imagem que será exibida
let currentIndex = 0; 

function changeImage() {
    // Calcular a posição para a transição
    const offset = -100 * currentIndex; // Desloca a lista de itens para a esquerda

    // Aplica a transição de deslizamento na lista de itens
    document.querySelector('.slider .list').style.transform = `translateX(${offset}%)`; 

    // Atualiza o índice para a próxima imagem
    currentIndex = (currentIndex + 1) % totalItems; // Garante que quando atingir o final, volta ao início
}

// Muda a imagem automaticamente a cada 5 segundos
setInterval(changeImage, 5000); // 5000ms = 5 segundos


