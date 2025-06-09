// Set current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("modificationDate").textContent = new Date(document.lastModified).toLocaleString("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

// Mobile menu toggle
function toggleMenu() {
  const menu = document.querySelector("header .menu");
  const hamburger = document.querySelector("header .hamburger");

  menu.classList.toggle("active");
  hamburger.classList.toggle("menu-open");

  const isOpen = menu.classList.contains("active");
  hamburger.setAttribute("aria-expanded", isOpen);
}
// Weather and Forecast API integration
// Note: Replace
const apiKey = 'f7459dc6d4d63dded70fd636da5f7727'; // Put your API key here

// with your actual OpenWeatherMap API key
    const city = 'Calabar';
    const units = 'metric';

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&cnt=24&appid=${apiKey}`;

    async function fetchWeather() {
      try {
        const response = await fetch(weatherURL);
        if (!response.ok) throw new Error(`API error: ${response.status} ${response.statusText}`);
        const data = await response.json();

        const temp = data.main.temp.toFixed(1);
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;
        const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        const weatherDiv = document.getElementById('current-weather');
        weatherDiv.innerHTML = `
          <img src="${iconURL}" alt="${desc}" style="vertical-align: middle; width:48px; height:48px;">
          <span>Current: ${temp}°C, ${desc}</span>
        `;
      } catch (error) {
        document.getElementById('current-weather').textContent = `Error loading weather: ${error.message}`;
        console.error(error);
      }
    }

    async function fetchForecast() {
      try {
        const response = await fetch(forecastURL);
        if (!response.ok) throw new Error(`API error: ${response.status} ${response.statusText}`);
        const data = await response.json();

        const forecastList = document.getElementById('forecast-list');
        forecastList.innerHTML = '';

        const middayForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);

        middayForecasts.forEach(item => {
          const date = new Date(item.dt_txt);
          const temp = item.main.temp.toFixed(1);
          const desc = item.weather[0].description;
          const icon = item.weather[0].icon;
          const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <img src="${iconURL}" alt="${desc}" style="vertical-align: middle; width:36px; height:36px;">
            <strong>${date.toDateString()}:</strong> ${temp}°C, ${desc}
          `;
          forecastList.appendChild(listItem);
        });
      } catch (error) {
        document.getElementById('forecast-list').innerHTML = `<li>Error loading forecast: ${error.message}</li>`;
        console.error(error);
      }
    }

    fetchWeather();
    fetchForecast();
const spotlightContainer = document.getElementById("spotlight-container");

// Function to load spotlight members from JSON file
document.addEventListener("DOMContentLoaded", () => {
  loadSpotlights();
});

async function loadSpotlights() {
  const spotlightContainer = document.getElementById("spotlight-container");

  try {
    const response = await fetch("data/member.json");
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const members = await response.json();

    // Filter for Gold and Silver members
    const goldSilverMembers = members.filter(member =>
      member.membership === "Gold" || member.membership === "Silver"
    );

    // Shuffle and pick 2-3 random members
    const shuffled = goldSilverMembers.sort(() => 0.5 - Math.random());
    const spotlightMembers = shuffled.slice(0, 3);

    spotlightMembers.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} Logo" loading="lazy">
        <h3>${member.name}</h3>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
        <span class="badge">${member.membership} Member</span>
      `;

      spotlightContainer.appendChild(card);
    });

  } catch (error) {
    console.error("Failed to load spotlight members:", error);
    spotlightContainer.innerHTML = `<p style="color: red;">Failed to load spotlight members.</p>`;
  }
}
