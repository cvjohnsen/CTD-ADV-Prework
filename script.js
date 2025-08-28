// Create Variables/ API

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
  const img = document.getElementById("catImage");  
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
    if (select.value) url += `?breed_ids=${select.value}`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(data => {
        const first = Array.isArray(data) ? data[0] : null;
        if (!first || !first.url) {
          alert("No image returned. Try again.");
          return;
        }
        img.src = first.url;
        if (info) {
          info.textContent = select.value
            ? `Breed: ${select.selectedOptions[0].text}`
            : "Random Cat!";
        }
      })
      .catch(err => {
        console.error("Image load error:", err);
        alert("Error loading image");
      });
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
