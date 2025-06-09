// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // === Set current year in footer ===
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  // === Set last modified date ===
  document.getElementById("modificationDate").textContent = new Date(document.lastModified).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  // === Mobile menu toggle ===
  function toggleMenu() {
  const menu = document.querySelector("header .menu");
  const hamburger = document.querySelector("header .hamburger");

  menu.classList.toggle("active");
  hamburger.classList.toggle("menu-open");

  const isOpen = menu.classList.contains("active");
  hamburger.setAttribute("aria-expanded", isOpen);
}

  // === Visitor message using localStorage ===
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

  // === Fetch and display discover cards ===
  fetch('data/discover.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('discovercards-container');

      data.forEach((item) => {
        const card = document.createElement('article');
        card.className = 'card';

        card.innerHTML = `
          <h2>${item.name}</h2>
          <figure>
            <img src="${item.image}" alt="Photo of ${item.name}" loading="lazy" width="300" height="200" />
          </figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button>Learn More</button>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error loading JSON data:', error);
    });
});
