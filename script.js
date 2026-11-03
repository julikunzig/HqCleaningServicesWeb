const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
const isSpanish = document.documentElement.lang === 'es';
const labels = isSpanish
  ? { open: 'Abrir navegación', close: 'Cerrar navegación', confirmation: 'Gracias. Nos comunicaremos con usted pronto.' }
  : { open: 'Open navigation', close: 'Close navigation', confirmation: 'Thanks. We will contact you soon.' };

menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? labels.close : labels.open);
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', labels.open);
  });
});

const quoteForm = document.querySelector('.quote-form');

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    quoteForm.querySelector('.form-message').textContent = labels.confirmation;
    quoteForm.reset();
  });
}
