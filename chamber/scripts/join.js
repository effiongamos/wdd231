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

// Handle dialog open based on selected membership level
const membershipSelect = document.getElementById("membership");
const goldDialog = document.getElementById("goldDialog");
const silverDialog = document.getElementById("silverDialog");

membershipSelect.addEventListener('change', function () {
    if (this.value === 'gold') {
        goldDialog.showModal();
    } else if (this.value === 'silver') {
        silverDialog.showModal();
    }
});

// Close dialog functionality
document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('dialog').close();
    });
});

// Set timestamp on form load
document.getElementById("timestamp").value = new Date().toLocaleString();
