document.addEventListener('DOMContentLoaded', () => {
    // Substitui números de versículos por spans
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(function (paragraph) {
        paragraph.innerHTML = paragraph.innerHTML.replace(/\b([1-9][0-9]{0,2})\b/g, '<span class="versiculo" aria-hidden="true">$1</span>');
    });

    // Seleciona o ícone do menu e os itens do menu
    const menuIcon = document.getElementById('menuIcon');
    const menuItems = document.getElementById('menuItems');

    // Remove a classe 'show' inicialmente para não esconder o menu em telas grandes
    menuItems.classList.remove('show');

    // Adiciona evento de clique no ícone do menu
    menuIcon.addEventListener('click', () => {
        // Alterna a classe 'active' no ícone do menu
        menuIcon.classList.toggle('active');
        // Alterna a classe 'show' na lista de itens do menu
        menuItems.classList.toggle('show');

        console.log('Menu ativo:', menuIcon.classList.contains('active')); // Para verificar o estado do menu
    });
});

// Controle da estilização dos versículos //
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o main
    const mainContent = document.querySelector("main");

    // Expressão regular para capturar números de 1 a 999
    const regex = /\b([1-9][0-9]{0,2})\b/g;

    // Função para aplicar a formatação em todo o conteúdo do main
    function formatNumbers(element) {
        element.innerHTML = element.innerHTML.replace(regex, '<span class="verse-number">$1</span>');
    }

    // Aplica a função de formatação em todas as seções dentro do main
    formatNumbers(mainContent);
});