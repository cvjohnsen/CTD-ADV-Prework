// Create Variables
const breedSelect = document.getElementById('breedSelect');
const catImage = document.getElementById('catImage');
const getCatBtn = document.getElementById('generateBtn');
const breedInfo = document.getElementById('breedInfo');

// Load breed endpoint and populate dropdown
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

