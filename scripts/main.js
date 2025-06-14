// Update year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Updated: ${document.lastModified}`;

// Toggle menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !expanded);
  navMenu.classList.toggle("open");
});

// Dummy course data
const courses = [
  { name: "CSE 110 - Intro to programming", category: "CSE" },
  { name: "CSE 111 - Programming with Functions", category: "CSE" },
  { name: "CSE 210 - Programing with Class", category: "CSE" },
  { name: "WDD 130 - Web Fundamentals", category: "WDD" },
  { name: "WDD 131 - Dynamics Web Fundamentals", category: "WDD" },
  { name: "WDD 231 - Web Frontend Development 1", category: "WDD" },
];

// Display filtered courses
function displayCourses(filter) {
  const grid = document.querySelector(".courses-grid");
  grid.innerHTML = "";

  const filtered = filter === "All" ? courses : courses.filter(c => c.category === filter);

  filtered.forEach(course => {
    const div = document.createElement("div");
    div.className = "course";
    div.textContent = course.name;
    grid.appendChild(div);
  });
}

// Set up filter buttons
document.querySelectorAll(".course-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.textContent.trim();
    displayCourses(filter);
  });
});

// Initialize
displayCourses("All");
