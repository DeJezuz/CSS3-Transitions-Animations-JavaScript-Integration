// Global state
let isAnimating = false;

/**
 * Calculates a scaled value.
 * @param {number} base - The base value.
 * @param {number} factor - The scaling factor.
 * @returns {number} - The scaled result.
 */
function calculateScale(base, factor) {
  return base * factor;
}

/**
 * Toggles a CSS class on a given element.
 * @param {string} elementId - The ID of the target element.
 * @param {string} className - The class to toggle.
 */
function toggleClass(elementId, className) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.toggle(className);
  }
}

// DOM ready
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");
  const animateBtn = document.getElementById("animateBtn");

  // Animate box
  animateBtn.addEventListener("click", () => {
    toggleClass("animatedBox", "animate");
    isAnimating = !isAnimating;
    console.log("Box animation:", isAnimating ? "active" : "inactive");
  });

  // Modal controls
  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    console.log("Modal opened");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    console.log("Modal closed");
  });
});
