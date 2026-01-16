import initHamburgerMenu from './hamburger-menu.js';
import initHeaderObserver from './header-observer.js';
import initSkillFilter from './skill-filter.js';

document.addEventListener('DOMContentLoaded', () => {
  initHamburgerMenu();
  initHeaderObserver();
  initSkillFilter();
});