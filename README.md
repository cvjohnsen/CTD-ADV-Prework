Cat Generator 

A simple webpage that uses **The Cat API** to display random cat images
and allow you to choose a breed.
This project demonstrates fetching data from two API endpoints:

-   **`/v1/breeds`** → loads a list of cat breeds into a dropdown menu
-   **`/v1/images/search`** → retrieves cat images (optionally filtered
    by breed)

------------------------------------------------------------------------

Project Files

-   `index.html` → main Images webpage
-   `breeds.html` → Breeds page (each breed is a link)
-   `style.css` → basic styling
-   `script.js` → JavaScript logic
-   `README.md` → instructions

------------------------------------------------------------------------

How to Run the Webpage

1.  **Download the project folder** (or clone it from your repository).

2.  Make sure the following files are in the same folder:

-   `index.html`
-   `breeds.html`
-   `style.css`
-   `script.js`

3.  **Open the webpage** in a modern browser (Chrome, Edge, Firefox, Safari):

-   Double-click `index.html`
-   Or open breeds.html for the Breeds page
No build tools or servers are required—just open the HTML files.

4.  **Use the app**:
Images page (index.html)

-   Select a breed from the dropdown.
-   Click the **Generate Cat** button to fetch and display a random cat image.
-   If you arrive via a link like index.html?breed=abys, the breed will be pre-selected and the image will auto-load for that breed.

Breeds page (breeds.html)

-   Shows a list of cat breeds.
-   Click any breed name to jump to the Images page with that breed pre-selected (e.g., index.html?breed=BREED_ID).
------------------------------------------------------------------------

Requirements

-   Internet connection (to fetch from [The Cat
    API](https://thecatapi.com))
-   A modern web browser (Chrome, Edge, Firefox, Safari)

------------------------------------------------------------------------
Optional: Use an API Key

You can sign up at [The Cat API](https://thecatapi.com) for a free API
key if you want higher request limits.
If you get a key, open `script.js` and add it like this:

------------------------------------------------------------------------
**Assignment Checklist (mapping)**

Structure

- Public GitHub repository
- HTML, CSS, JavaScript files
- README with instructions

Content

- Uses two endpoints: /v1/breeds and /v1/images/search
- Includes navigation between endpoint pages (Images ↔ Breeds)
- Linked pages issue new GET requests when loaded or clicked

Functionality

- Runs by opening the HTML files (no setup)
- Simple, readable code; basic error handling (alert() on failures)
- Basic, legible styling

That's it --- no installations or servers required. Just open
pages and enjoy random cats!
