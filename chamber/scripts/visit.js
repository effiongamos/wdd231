const messageArea = document.getElementById('visit-message');
const today = Date.now();
const lastVisit = Number(localStorage.getItem('last-visit')) || 0;
const msInDay = 86400000;

let message = "";

if (lastVisit === 0) {
  message = "Welcome! Let us know if you have any questions.";
} else {
  const daysPassed = Math.floor((today - lastVisit) / msInDay);
  if (daysPassed < 1) {
    message = "Back so soon! Awesome!";
  } else {
    message = `You last visited ${daysPassed} ${daysPassed === 1 ? 'day' : 'days'} ago.`;
  }
}

if (messageArea) {
  messageArea.textContent = message;
}
localStorage.setItem('last-visit', today);


f