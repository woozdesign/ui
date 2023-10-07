export function isElementInViewport(el: Element, direction: ('left' | 'right' | 'top' | 'bottom')[] = ['left', 'right', 'top', 'bottom']) {
  const rect = el.getBoundingClientRect();

  let isInView = true;

  if (direction.includes('top') && rect.top < 0) {
    isInView = false;
  }

  if (direction.includes('bottom') && rect.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
    isInView = false;
  }

  if (direction.includes('left') && rect.left < 0) {
    isInView = false;
  }

  if (direction.includes('right') && rect.right > (window.innerWidth || document.documentElement.clientWidth)) {
    isInView = false;
  }

  return isInView;
}
