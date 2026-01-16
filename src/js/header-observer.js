import { isSP } from './utils.js';

const header = document.querySelector('[data-observe="header"]');
const trigger = document.querySelector('[data-observe="header-trigger"]');
const OVERLAY_CLASS = 'header--overlay';

export default function initHeaderObserver() {
  if (header && trigger) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isSP()) return;
        if (entries[0].isIntersecting) {
          header.classList.remove(OVERLAY_CLASS);
        }
        else {
          header.classList.add(OVERLAY_CLASS);
        }
      },
      {
        rootMargin: '-30px',
        threshold: 0
      }
    );

    observer.observe(trigger);
  }
}