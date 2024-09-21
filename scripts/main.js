// Current Year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Last Modified Date
document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;


// JavaScript to toggle the navigation menu on small screens
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Example course array and filtering
const courses = [
    { name: "CSE 110", completed: false },
    { name: "CSE 111", completed: true },
    { name: "CSE 120", completed: false },
    { name: "WDD 130", completed: true },
    { name: "WDD 230", completed: false },
    { name: "WDD 331", completed: true }
];

// Function to display courses
function displayCourses(filter) {
    const courseGrid = document.querySelector('.courses-grid');
    courseGrid.innerHTML = ''; // Clear previous courses
    courses.forEach(course => {
        if (filter === "All" || course.name.startsWith(filter)) {
            const courseDiv = document.createElement('article');
            courseDiv.className = 'course';
            courseDiv.textContent = course.name;
            if (course.completed) {
                courseDiv.style.backgroundColor = '#d4edda'; // Highlight completed courses
            }
            courseGrid.appendChild(courseDiv);
        }
    });
}

// Event listeners for filter buttons
document.querySelectorAll('.course-btn').forEach(button => {
    button.addEventListener('click', () => {
        displayCourses(button.textContent === "All" ? "All" : button.textContent);
    });
});

// Initial display
displayCourses("All");

