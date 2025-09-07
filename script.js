// Global state variable
let isAnimating = false;

// Function with parameters and return value
function calculateScale(base, factor) {
  return base * factor; // Returns scaled value
}

// Function to toggle a class on an element
function toggleClass(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.toggle(className);
}

// Animate box on button click
document.getElementById("animateBtn").addEventListener("click", () => {
  toggleClass("animatedBox", "animate");
  isAnimating = !isAnimating;
  console.log("Box animation toggled:", isAnimating);
});

// Modal logic
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");

  // Show modal
  function showModal() {
    modal.classList.remove("hidden");
    console.log("Modal opened");
  }

  // Hide modal
  function hideModal() {
    modal.classList.add("hidden");
    console.log("Modal closed");
  }

  openBtn.addEventListener("click", showModal);
  closeBtn.addEventListener("click", hideModal);
});
