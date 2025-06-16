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

// Tools 
document.addEventListener("DOMContentLoaded", () => {
  const toolsContainer = document.getElementById("tools-list");

  fetch("data/tools.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch tools data");
      }
      return response.json();
    })
    .then((tools) => {
      tools.forEach((tool) => {
        const card = document.createElement("div");
        card.className = "tool-card";
        card.setAttribute("role", "listitem");

        card.innerHTML = `
          <h3>${tool.name}</h3>
          <p>${tool.shortDescription}</p>
          <a href="${tool.link}" class="tool-link" aria-label="Open ${tool.name} tool page">Try Tool</a>
        `;

        toolsContainer.appendChild(card);
      });
    })
    .catch((error) => {
      toolsContainer.innerHTML = `<p class="error" role="alert">Oops! Something went wrong while loading tools.</p>`;
      console.error("Error loading tools:", error);
    });
});