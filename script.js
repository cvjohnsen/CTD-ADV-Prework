// Create Variables
const breedSelect = document.getElementById('breedSelect');
const catImage = document.getElementById('catImage');
const getCatBtn = document.getElementById('generateBtn');
const breedInfo = document.getElementById('breedInfo');

// Endpoint 1: Load breed endpoint and populate dropdown
async function loadBreeds() {
    const response = await fetch('https://api.thecatapi.com/v1/breeds');
    const breeds = await response.json();

    breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
    });
}

// Endpoint 2: Fetch and display cat image and breed info
    async function getCat () {
    const breedId = breedSelect.value;
    const url = breedId
    ? `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    : "https://api.thecatapi.com/v1/images/search";

  const res = await fetch(url);
  const data = await res.json();

  catImage.src = data[0].url;
  breedInfo.textContent = breedId
    ? `Breed: ${breedSelect.selectedOptions[0].text}`
    : "Random Cat!";
    }

// Event Listener
getCatBtn.addEventListener('click', getCat);

// Initial Load
loadBreeds();
getCat();