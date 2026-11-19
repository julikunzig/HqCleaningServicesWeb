const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
const isSpanish = document.documentElement.lang === 'es';
const labels = isSpanish
  ? { open: 'Abrir navegación', close: 'Cerrar navegación' }
  : { open: 'Open navigation', close: 'Close navigation' };

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? labels.close : labels.open);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', labels.open);
    });
  });
}
