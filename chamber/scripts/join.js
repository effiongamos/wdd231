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
  const menu = document.querySelector("header .menu");
  const hamburger = document.querySelector("header .hamburger");

  menu.classList.toggle("active");
  hamburger.classList.toggle("menu-open");

  const isOpen = menu.classList.contains("active");
  hamburger.setAttribute("aria-expanded", isOpen);
}
// end of header and footer scriptiing


// Set timestamp when the form is loaded
document.addEventListener('DOMContentLoaded', () => {
  const timestampInput = document.getElementById('timestamp');
  if (timestampInput) {
    const now = new Date();
    timestampInput.value = now.toISOString();
  }
});

// Open Dialogs
document.querySelectorAll('.open-dialog').forEach(button => {
  button.addEventListener('click', () => {
    const targetDialog = document.getElementById(button.dataset.target);
    if (targetDialog) {
      targetDialog.showModal();
    }
  });
});


// to save the information data from the join.html form 
document.addEventListener("DOMContentLoaded", () => { 
    console.log("join.js loaded, URL →", window.location.search);
    const urlParams = new URLSearchParams(window.location.search);
    const formData = {
        name: urlParams.get("First name") || "",
        lastName: urlParams.get("Last name") || "",
        phone: urlParams.get("phone") || "",
        email: urlParams.get("email") || "",
        businessName: urlParams.get("Business name") || "",
        membershiplevel: urlParams.get("Membership level") || "",
        timestamp: urlParams.get("timestamp") || new Date().toISOString(),
        comments: urlParams.get("comments") || "",
        agree: urlParams.get("agree") === "on" ? true : false,
    };
    console.log("Form Data:", formData);
    // Display the form data in the console
    const formDataElement = document.getElementById("formData");   
    if (formDataElement) {
        formDataElement.innerHTML = `
            <p><strong>First Name:</strong> ${formData.name}</p>
            <p><strong>Last Name:</strong> ${formData.lastName}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Business Name:</strong> ${formData.businessName}</p>
            <p><strong>Membership Level:</strong> ${formData.membershiplevel}</p>
            <p><strong>Timestamp:</strong> ${new Date(formData.timestamp).toLocaleString()}</p>
            <p><strong>Comments:</strong> ${formData.comments}</p>
            <p><strong>Agree to Terms:</strong> ${formData.agree ? "Yes" : "No"}</p>
        `;
    }
    // Save the form data to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));
    // Display the saved data from localStorage
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
        console.log("Saved Data from LocalStorage:", savedData);
        const savedDataElement = document.getElementById("savedData");
        if (savedDataElement) {
            savedDataElement.innerHTML = `
                <p><strong>First Name:</strong> ${savedData.name}</p>
                <p><strong>Last Name:</strong> ${savedData.lastName}</p>
                <p><strong>Phone:</strong> ${savedData.phone}</p>
                <p><strong>Email:</strong> ${savedData.email}</p>
                <p><strong>Business Name:</strong> ${savedData.businessName}</p>
                <p><strong>Membership Level:</strong> ${savedData.membershiplevel}</p>
                <p><strong>Timestamp:</strong> ${new Date(savedData.timestamp).toLocaleString()}</p>
                <p><strong>Comments:</strong> ${savedData.comments}</p>
                <p><strong>Agree to Terms:</strong> ${savedData.agree ? "Yes" : "No"}</p>
            `;
        }
    }
}
);
// Clear localStorage when the form is submitted
document.getElementById("joinForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission
    localStorage.removeItem("formData"); // Clear the saved data from localStorage
    alert("Form submitted and localStorage cleared.");
    // Optionally, redirect or reset the form here
});


        