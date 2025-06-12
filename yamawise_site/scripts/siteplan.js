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