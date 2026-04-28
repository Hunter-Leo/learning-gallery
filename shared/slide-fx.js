/* shared/slide-fx.js - Slide Effects Library */

/**
 * Fade in effect
 * @param {HTMLElement} element - Target element
 * @param {number} duration - Animation duration in ms
 */
export function fadeIn(element, duration = 300) {
  element.style.opacity = 0;
  element.style.transition = `opacity ${duration}ms ease`;
  requestAnimationFrame(() => {
    element.style.opacity = 1;
  });
}

/**
 * Slide in effect
 * @param {HTMLElement} element - Target element
 * @param {string} direction - Slide direction: 'left', 'right', 'top', 'bottom'
 * @param {number} duration - Animation duration in ms
 */
export function slideIn(element, direction = 'left', duration = 400) {
  const transforms = {
    left: 'translateX(-100%)',
    right: 'translateX(100%)',
    top: 'translateY(-100%)',
    bottom: 'translateY(100%)'
  };

  element.style.transform = transforms[direction];
  element.style.transition = `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
  requestAnimationFrame(() => {
    element.style.transform = 'translate(0)';
  });
}

/**
 * Scale in effect
 * @param {HTMLElement} element - Target element
 * @param {number} duration - Animation duration in ms
 */
export function scaleIn(element, duration = 300) {
  element.style.transform = 'scale(0.9)';
  element.style.opacity = 0;
  element.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;
  requestAnimationFrame(() => {
    element.style.transform = 'scale(1)';
    element.style.opacity = 1;
  });
}
