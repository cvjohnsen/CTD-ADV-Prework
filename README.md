Cat Generator 

A simple webpage that uses **The Cat API** to display random cat images
and allow you to choose a breed.\
This project demonstrates fetching data from two API endpoints:

-   **`/v1/breeds`** → loads a list of cat breeds into a dropdown menu\
-   **`/v1/images/search`** → retrieves cat images (optionally filtered
    by breed)

------------------------------------------------------------------------

Project Files

-   `index.html` → main webpage\
-   `style.css` → basic styling\
-   `script.js` → JavaScript logic\
-   `README.md` → instructions

------------------------------------------------------------------------

How to Run the Webpage

1.  **Download the project folder** (or clone it from your repository).

2.  Make sure the following files are in the same folder:

    -   `index.html`
    -   `style.css`
    -   `script.js`

3.  **Open the webpage**:

    -   Double-click `index.html`\
    -   Or right-click it → "Open With" → choose your browser (Chrome,
        Edge, Firefox, or Safari).

4.  **Use the app**:

    -   Select a breed from the dropdown (or leave it as *Any breed*).\
    -   Click the **Get Cat** button.\
    -   A random cat image will appear, with breed info if available.

------------------------------------------------------------------------

Requirements

-   Internet connection (to fetch from [The Cat
    API](https://thecatapi.com))\
-   A modern web browser (Chrome, Edge, Firefox, Safari)

------------------------------------------------------------------------
Optional: Use an API Key

You can sign up at [The Cat API](https://thecatapi.com) for a free API
key if you want higher request limits.\
If you get a key, open `script.js` and add it like this:

``` javascript
const API_KEY = "your_api_key_here";
```

------------------------------------------------------------------------

That's it --- no installations or servers required. Just open
`index.html` and enjoy random cats!
