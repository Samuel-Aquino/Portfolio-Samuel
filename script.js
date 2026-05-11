/**
 * Samuel de Aquino Silva - Portfólio
 * Lógica de Interação e Validação de Formulário
 */

// 1. Menu Mobile
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Fechar menu ao clicar em um link (Mobile)
const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('nav');
        nav.classList.remove('active');
    });
});

// 2. Alternância de Tema (Claro/Escuro)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    
    // Salvar preferência no localStorage
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Carregar tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
}

// 3. Validação do Formulário de Contato
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio real do formulário
    
    // Captura dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    // Regex para validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validação
    if (nome === "" || email === "" || mensagem === "") {
        showMessage("Por favor, preencha todos os campos.", "error");
        return;
    }
    
    if (!emailRegex.test(email)) {
        showMessage("Por favor, insira um e-mail válido.", "error");
        return;
    }
    
    // Simulação de Envio
    showMessage("Enviando...", "success");
    
    setTimeout(() => {
        showMessage("Mensagem enviada com sucesso! Obrigado, " + nome + ".", "success");
        contactForm.reset(); // Limpa o formulário
    }, 1500);
});

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = type; // Aplica a classe 'success' ou 'error'
}

// 4. Comentário Adicional: Navegação Suave
// Já tratada pelo CSS (scroll-behavior: smooth), mas pode ser reforçada via JS se necessário.
console.log("Portfólio de Samuel Silva carregado com sucesso.");
