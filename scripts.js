const switchElement = document.getElementById('dark-mode-switch');
const body = document.body;
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const container = document.querySelector('.container');
const content = document.querySelector('.content');
const cards = document.querySelectorAll('.card');
const cardTitles = document.querySelectorAll('.card-title');
const cardTexts = document.querySelectorAll('.card-text');
const cardIcons = document.querySelectorAll('.card-icon');
const buttons = document.querySelectorAll('.buttons a');
const links = document.querySelectorAll('.links a');
const footer = document.querySelector('footer');

// Función para cambiar el modo
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    content.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    cards.forEach(card => card.classList.toggle('dark-mode'));
    cardTitles.forEach(title => title.classList.toggle('dark-mode'));
    cardTexts.forEach(text => text.classList.toggle('dark-mode'));
    cardIcons.forEach(icon => icon.classList.toggle('dark-mode'));
    buttons.forEach(button => button.classList.toggle('dark-mode'));
    links.forEach(link => link.classList.toggle('dark-mode'));
}

// Verificar la preferencia de modo del usuario
if (localStorage.getItem('dark-mode') === 'true') {
    toggleDarkMode();
    switchElement.checked = true;
}

switchElement.addEventListener('change', () => {
    toggleDarkMode();
    // Guardar la preferencia del usuario en localStorage
    localStorage.setItem('dark-mode', switchElement.checked);
});
