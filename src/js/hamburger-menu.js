const btn = document.querySelector('.hamburger-btn');
const menu = document.querySelector('#hamburger-menu');
const OPEN_CLASS = 'hamburger-menu--open';
const ACTIVE_CLASS = 'hamburger-btn--active';

export default function initHamburgerMenu() {
  btn.addEventListener('click', () => {
    btn.classList.toggle(ACTIVE_CLASS);
    const isOpen = menu.classList.toggle(OPEN_CLASS);
    menu.setAttribute('aria-hidden', String(!isOpen))
    btn.setAttribute('aria-expanded', String(isOpen));
  });
}