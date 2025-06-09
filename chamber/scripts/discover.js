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
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading JSON data:', error);
  });
