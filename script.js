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

// ── Booking modal ─────────────────────────────────────────
const BOOKING_EN = 'https://suite.kalimasgroup.net/en/book/klean/hq-cleaning-services';
const BOOKING_ES = 'https://suite.kalimasgroup.net/es/book/klean/hq-cleaning-services';

const bookingModal = document.getElementById('booking-modal');
const bookingFrame = document.getElementById('bk-frame');
const bookingClose = document.getElementById('bk-close');
const bookingBackdrop = bookingModal && bookingModal.querySelector('.bk-modal-backdrop');

function openBooking() {
  if (!bookingModal) return;
  bookingFrame.src = isSpanish ? BOOKING_ES : BOOKING_EN;
  bookingModal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeBooking() {
  if (!bookingModal) return;
  bookingModal.hidden = true;
  bookingFrame.src = '';
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-open-booking]').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    openBooking();
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', labels.open);
  });
});

if (bookingClose) bookingClose.addEventListener('click', closeBooking);
if (bookingBackdrop) bookingBackdrop.addEventListener('click', closeBooking);
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeBooking(); });
