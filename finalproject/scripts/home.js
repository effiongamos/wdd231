// Set current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("modificationDate").textContent = new Date(document.lastModified).toLocaleString("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

// Mobile menu toggle
function toggleMenu() {
    const menu = document.querySelector('.menu ul');
    const hamburger = document.querySelector('.hamburger');
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';

    menu.classList.toggle('show');
    hamburger.setAttribute('aria-expanded', !isExpanded);

    // Switch icon
    hamburger.querySelector('.open').style.display = isExpanded ? 'inline' : 'none';
    hamburger.querySelector('.close').style.display = isExpanded ? 'none' : 'inline';
}
// Auto Slide Show
const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

setInterval(nextSlide, 10000); // Change every 10 seconds

// Initial slide display
showSlide(current);

// features.js
document.addEventListener("DOMContentLoaded", () => {
  fetch('data/home.json')
    .then(response => response.json())
    .then(data => displayFeatures(data))
    .catch(error => console.error("Error loading features:", error));
});

function displayFeatures(featuresData) {
  const grid = document.getElementById("features-grid");

  featuresData.forEach((feature, index) => {
    const card = document.createElement("div");
    card.className = "feature-card";
    card.setAttribute("role", "listitem");
    card.innerHTML = `
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
      <button class="learn-more-btn" data-index="${index}" aria-label="Learn more about ${feature.title}">Learn More</button>
    `;
    grid.appendChild(card);
  });

  // Modal logic setup after cards are created
  createModal(featuresData);
}

function createModal(featuresData) {
  const modal = document.createElement("div");
  modal.className = "feature-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn" role="button" tabindex="0" aria-label="Close modal">&times;</span>
      <h3 id="modal-title"></h3>
      <p id="modal-text"></p>
    </div>
  `;
  document.body.appendChild(modal);

  const titleEl = document.getElementById("modal-title");
  const textEl = document.getElementById("modal-text");

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("learn-more-btn")) {
      const index = e.target.dataset.index;
      titleEl.textContent = featuresData[index].title;
      textEl.textContent = featuresData[index].more;
      modal.classList.add("open");
    }
    if (e.target.classList.contains("close-btn") || e.target === modal) {
      modal.classList.remove("open");
    }
  });
}
// Accessibility enhancements
document.addEventListener("keydown", (e) => {
  const modal = document.querySelector(".feature-modal");
  if (modal.classList.contains("open")) {
    if (e.key === "Escape") {
      modal.classList.remove("open");
    }
  }
});