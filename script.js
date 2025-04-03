// Smooth scroll para os links da navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação para mostrar/esconder o header durante o scroll
let lastScrollPosition = window.pageYOffset;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    
    if (currentScrollPosition > lastScrollPosition) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollPosition = currentScrollPosition;
});

// Adicione aqui outras funcionalidades JavaScript que desejar