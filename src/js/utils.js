const BREAKPOINT = 768;
const spMediaQuery = window.matchMedia(`(max-width: ${BREAKPOINT}px)`);
const pcMediaQuery = window.matchMedia(`(min-width: ${BREAKPOINT + 1}px)`);

function isSP() {
  return spMediaQuery.matches;
}

function isPC() {
  return pcMediaQuery.matches;
}

export { isSP, isPC };