// Global variable
let isAnimating = false;

// Function with parameters and return value
function calculateScale(base, factor) {
  return base * factor;
}

// Function to toggle animation class
function toggleClass(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.toggle(className);
}

// Animate box on button click
document.getElementById("animateBtn").addEventListener("click", () => {
  toggleClass("animatedBox", "animate");
  isAnimating = !isAnimating;
  console.log("Animation triggered:", isAnimating);
});

// Modal logic
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

function showModal() {
  let modalVisible = true;
  modal.classList.remove("hidden");
  console.log("Modal visible:", modalVisible);
}

function hideModal() {
  let modalVisible = false;
  modal.classList.add("hidden");
  console.log("Modal visible:", modalVisible);
}

openBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);
