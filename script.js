// Create Variables/ API
// const breedSelect = document.getElementById('breedSelect');
// const catImage = document.getElementById('catImage');
// const getCatBtn = document.getElementById('generateBtn');
// const breedInfo = document.getElementById('breedInfo');
const CAT_API_BASE = 'https://api.thecatapi.com/v1';

// Endpoint 1: Load breed endpoint and populate dropdown
   fetchBreeds ()
     .then(breeds => {
       breeds.forEach(breed => {
         const option = document.createElement('option');
         option.value = breed.id;
         option.textContent = breed.name;
         breedSelect.appendChild(option);
       });
     })
     .catch(err => console.error('Error can not load breeds:', err));

// Fetch and display random cat image
    button.addEventListener("click", () => {
    let url = `${CAT_API_BASE}/images/search`;
    if (select.value) {
      url += `?breed_ids=${select.value}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => {
        img.src = data[0].url;
      })
      .catch(() => alert("Error loading image"));
  });

// Breeds.html (Breed page)



// Endpoint 2: Fetch and display random cat image and breed info

// Event Listener
getCatBtn.addEventListener('click', getCat);

// Initial Load
loadBreeds();
getCat();