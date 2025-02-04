// Dynamically set the current year
const currentYearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Dynamically set the last modification date
const lastModifiedElement = document.getElementById("modificationDate");
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = lastModifiedDate.toLocaleString("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

// scrtipting for header mobile view
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const isMenuActive = menu.classList.contains('active');
    menu.classList.toggle('active', !isMenuActive);
    document.querySelector('.hamburger').setAttribute('aria-expanded', !isMenuActive);
  }
// end of header and footer scriptiing


// Handle form data display on the thank you page
if (window.location.pathname.includes("thankyou.html")) {
    const urlParams = new URLSearchParams(window.location.search);

    // Display user data from the URL parameters
    document.getElementById("displayFirst").textContent = urlParams.get("first");
    document.getElementById("displayLast").textContent = urlParams.get("last");
    document.getElementById("displayEmail").textContent = urlParams.get("email");
    document.getElementById("displayPhone").textContent = urlParams.get("phone");
    document.getElementById("displayBusiness").textContent = urlParams.get("organization");
    document.getElementById("displayMembership").textContent = urlParams.get("membership");
    document.getElementById("displayTimestamp").textContent = urlParams.get("timestamp");
}

// Open Dialogs
document.querySelectorAll('.open-dialog').forEach(button => {
    button.addEventListener('click', () => {
        const targetDialog = document.getElementById(button.dataset.target);
        if (targetDialog) {
            targetDialog.showModal(); // Open as a modal
        }
    });
});

// Close Dialogs
document.querySelectorAll('.membership-dialog .close').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('dialog').close(); // Close the dialog
    });
});