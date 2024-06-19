// Seleciona o ícone do menu e o elemento da barra de navegação
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Seleciona todos os elementos section e os links de navegação
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Função para lidar com o evento de rolagem (scroll)
window.onscroll = () => {
    // Itera sobre cada section
    sections.forEach(sec => {
        // Obtém a posição atual de rolagem (scroll)
        let top = window.scrollY;
        // Calcula o deslocamento e a altura da section
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        // Obtém o ID da section
        let id = sec.getAttribute('id');

        // Verifica se a posição atual de rolagem está dentro da section atual
        if (top >= offset && top < offset + height) {
            // Itera sobre cada link de navegação
            navlinks.forEach(link => {
                // Remove a classe 'active' de todos os links de navegação
                link.classList.remove('active');
                // Adiciona a classe 'active' ao link de navegação que corresponde ao ID da section atual
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            });
        }
    });
};

// Função para lidar com o evento de clique no ícone do menu
menuIcon.onclick = () => {
    // Alterna a classe 'bx-x' no ícone do menu
    menuIcon.classList.toggle('bx-x');
    // Alterna a classe 'active' na barra de navegação
    navbar.classList.toggle('active');
};

