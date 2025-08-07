const API_KEY = 'R4CvpphQv67WAITeVcylKlh6RrO1qUktZiX04xP3';
const form = document.getElementById('search-form');
const dateInput = document.getElementById('date');
const apodContainer = document.getElementById('apod-container');
const favouritesContainer = document.getElementById('favourites-container');


dateInput.max = new Date().toISOString().split("T")[0];

document.addEventListener("DOMContentLoaded", () => {
  displayFavourites();
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const date = dateInput.value;
  if (!date) return;

  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.media_type !== "image") {
      apodContainer.innerHTML = `<div class="alert alert-warning">Media is not an image for this date.</div>`;
      return;
    }

    displayAPOD(data);
  } catch (error) {
    apodContainer.innerHTML = `<div class="alert alert-danger">Error fetching data.</div>`;
    console.error(error);
  }
});

function displayAPOD(data) {
  apodContainer.innerHTML = `
    <div class="card shadow-sm">
      <img src="${data.url}" class="card-img-top" alt="${data.title}" />
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text"><small class="text-muted">${data.date}</small></p>
        <p class="card-text">${data.explanation}</p>
        <a href="${data.hdurl}" class="btn btn-outline-secondary me-2" target="_blank">View HD Image</a>
        <button class="btn btn-success" onclick="saveToFavourites('${data.date}')">Add to Favourites</button>
      </div>
    </div>
  `;
}

function saveToFavourites(date) {
  const favs = JSON.parse(localStorage.getItem("favourites")) || [];
  if (!favs.includes(date)) {
    favs.push(date);
    localStorage.setItem("favourites", JSON.stringify(favs));
  }
  displayFavourites();
}

async function displayFavourites() {
  favouritesContainer.innerHTML = '';
  const favDates = JSON.parse(localStorage.getItem("favourites")) || [];

  for (const date of favDates) {
    try {
      const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`);
      const data = await res.json();
      if (data.media_type !== "image") continue;

      const card = document.createElement("div");
      card.className = "col";
      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${data.url}" class="card-img-top" alt="${data.title}" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text"><small class="text-muted">${data.date}</small></p>
            <a href="${data.hdurl}" class="btn btn-outline-secondary mb-2 mt-auto" target="_blank">HD Image</a>
            <button class="btn btn-danger" onclick="removeFavourite('${data.date}')">Remove</button>
          </div>
        </div>
      `;
      favouritesContainer.appendChild(card);
    } catch (error) {
      console.error(`Error loading favourite for ${date}:`, error);
    }
  }
}

function removeFavourite(date) {
  const favs = JSON.parse(localStorage.getItem("favourites")) || [];
  const updated = favs.filter(d => d !== date);
  localStorage.setItem("favourites", JSON.stringify(updated));
  displayFavourites();
}
