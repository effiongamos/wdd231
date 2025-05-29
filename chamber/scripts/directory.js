// Set current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("modificationDate").textContent = new Date(document.lastModified).toLocaleString("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

// Mobile menu toggle
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
  document.querySelector('.hamburger').setAttribute('aria-expanded', menu.classList.contains('active'));
}

// Load members from JSON
async function getMembers() {
  try {
    const response = await fetch('data/member.json');
    if (!response.ok) throw new Error("Failed to fetch members");
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error("Error:", error);
    document.getElementById('members-container').innerHTML = `<p style="color:red;">Could not load directory data.</p>`;
  }
}

// Display member cards
function displayMembers(members) {
  const container = document.getElementById("members-container");
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("chamber__card");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <div>
        <img src="images/${member.image}" alt="${member.name}" width="80" height="80">
        <div class="chamber__card_text">
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p><strong>Membership:</strong> ${member.membership}</p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Toggle grid and list views
document.getElementById("grid-view").addEventListener("click", () => {
  document.getElementById("members-container").classList.remove("list");
});
document.getElementById("list-view").addEventListener("click", () => {
  document.getElementById("members-container").classList.add("list");
});

getMembers();
