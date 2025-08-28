// Create Variables/ API

// Old code before refactor
// const breedSelect = document.getElementById('breedSelect');
// const catImage = document.getElementById('catImage');
// const getCatBtn = document.getElementById('generateBtn');
// const breedInfo = document.getElementById('breedInfo');

// // Endpoint 1: Load breed endpoint and populate dropdown
// async function loadBreeds() {
//     const response = await fetch('https://api.thecatapi.com/v1/breeds');
//     const breeds = await response.json();
    
//     breeds.forEach(breed => {   
//         const option = document.createElement('option');
//         option.value = breed.id;
//         option.textContent = breed.name;
//         breedSelect.appendChild(option);
//     });
//  }

// // Endpoint 2: Fetch random cat image based on selected breed   
// async function getCat () {
//     const breedId = breedSelect.value;
//     let url = breedId
//     ? `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
//     : 'https://api.thecatapi.com/v1/images/search';

// const response = await fetch(url);
// const data = await response.json();

// catImage.src = data[0].url;
// breedInfo.textContent = breedId
// ? `Breed: ${breedSelect.selectedOptions[0].text}`
// : 'Random Cat!';
// } 

// // Event Listener
// getCatBtn.addEventListener('click', getCat);


// Shared API settings
const CAT_API_BASE = "https://api.thecatapi.com/v1";

// Fetch all breeds (used on both pages)
async function fetchBreeds() {
  const res = await fetch(`${CAT_API_BASE}/breeds`);
  if (!res.ok) throw new Error("Failed to load breeds");
  return res.json();
}

// For index.html (Images page)
function initImagesPage() {
  const select = document.getElementById("breedSelect");
  const button = document.getElementById("generateBtn");
  const img = document.getElementById("catImgage");
  const info = document.getElementById("breedInfo");

  // populate breeds dropdown
  fetchBreeds()
    .then(breeds => {
      breeds.forEach(b => {
        const opt = document.createElement("option");
        opt.value = b.id;
        opt.textContent = b.name;
        select.appendChild(opt);
      });
    })
    .catch(() => console.log("Could not load breeds"));

  // fetch random cat image
  button.addEventListener("click", () => {
    let url = `${CAT_API_BASE}/images/search`;
    if (select.value) {
      url += `?breed_ids=${select.value}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => {
        img.src = data[0].url;
        if (info) {
            info.textContent = select.value
            ? `Breed: ${select.selectedOptions[0].text}`
            : 'Random Cat!';
        }
      })
      .catch(() => alert("Error loading image"));
  });
}

// For breeds.html (Breeds page)
function initBreedsPage() {
  const list = document.getElementById("breedList");
  const status = document.getElementById("breedStatus");

  fetchBreeds()
    .then(breeds => {
      status.textContent = "";
      breeds.forEach(b => {
        const li = document.createElement("li");
        li.textContent = `${b.name} — Origin: ${b.origin}`;
        list.appendChild(li);
      });
    })
    .catch(() => {
      status.textContent = "Could not load breeds";
    });
}
