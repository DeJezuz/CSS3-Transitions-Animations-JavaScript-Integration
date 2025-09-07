class AnimationController {
  toggle(element, className) {
    if (element) element.classList.toggle(className);
  }

  show(element, className = 'show') {
    if (element) {
      element.classList.remove('hidden');
      element.classList.add(className);
      element.setAttribute('aria-hidden', 'false');
      this.trapFocus(element);
    }
  }

  hide(element, className = 'show') {
    if (element) {
      element.classList.remove(className);
      element.classList.add('hidden');
      element.setAttribute('aria-hidden', 'true');
    }
  }

  calculateDelay(index, base = 100) {
    return index * base;
  }

  trapFocus(modal) {
    const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKeydown = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    };

    modal.addEventListener('keydown', handleKeydown, { once: true });
    first?.focus();
  }
}

const animator = new AnimationController();

document.getElementById('animateBtn')?.addEventListener('click', () => {
  animator.toggle(document.getElementById('box'), 'animate');
});

document.getElementById('modalBtn')?.addEventListener('click', () => {
  animator.show(document.getElementById('modal'));
});

document.getElementById('closeModal')?.addEventListener('click', () => {
  animator.hide(document.getElementById('modal'));
});

document.getElementById('loaderBtn')?.addEventListener('click', () => {
  animator.toggle(document.getElementById('loader'), 'hidden');
});

document.getElementById('motionToggle')?.addEventListener('change', e => {
  document.body.classList.toggle('reduce-motion', e.target.checked);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    animator.hide(document.getElementById('modal'));
  }
});

(function scopeDemo() {
  const localMessage = "Scoped locally!";
  console.log(localMessage);
})();

console.log("Delay for item 4:", animator.calculateDelay(4));
