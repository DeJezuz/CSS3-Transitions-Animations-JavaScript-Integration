// Global state
let animationActive = false;

// Part 2: Function with parameters and return value
function calculateScale(base, factor) {
  return base * factor;
}

// Part 2: Scope demonstration
const globalTheme = 'light';
function getThemePreference(userSetting) {
  let localTheme = userSetting || globalTheme;
  return localTheme;
}

// Part 3: Trigger animation
document.getElementById('triggerAnimation').addEventListener('click', () => {
  const box = document.getElementById('animatedBox');
  animationActive = !animationActive;
  box.classList.toggle('active', animationActive);
});

// Part 3: Card flip
document.getElementById('flipCard').addEventListener('click', () => {
  const card = document.getElementById('flipCard');
  card.classList.toggle('flipped');
});
