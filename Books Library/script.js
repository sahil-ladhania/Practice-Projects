// DOM Element References
let booksContainer = document.querySelector("#booksContainer");
let toggleView = document.querySelector("#toggleView");
let searchInput = document.querySelector("#searchInput");
let loadMore = document.querySelector("#loadMore");

// State Variables
let books = [];
let currentPage = 1;

// Fetch Books for a Given Page
async function getBooks(currentPage) {
    const response = await fetch(`https://api.freeapi.app/api/v1/public/books?page=${currentPage}`);
    const data = await response.json();
    console.log(data.data.data);
    return data.data.data;
}

// Initial Load: Fetch Page 1
getBooks(currentPage).then((data) => {
    books = data;
    showBooks(""); 
});

// Render Books (Filtered or Full List)
async function showBooks(searchedText) {
    booksContainer.innerHTML = ""; // Clear previous cards

    let filteredBooks = books;

    // Filter if user types a search query
    if (searchedText !== "") {
        searchedText = searchedText.toLowerCase();

        filteredBooks = books.filter(book => {
            const title = book.volumeInfo.title?.toLowerCase() || "";
            const authors = (book.volumeInfo.authors || []).join(" ").toLowerCase();
            return title.includes(searchedText) || authors.includes(searchedText);
        });
    }

    // Loop through filtered books and render cards
    filteredBooks.forEach(book => {
        let bookCard = document.createElement("div");
        bookCard.classList = "book-card";

        let bookImage = document.createElement("img");
        bookImage.src = book.volumeInfo.imageLinks?.thumbnail || "fallback.jpg";
        bookCard.appendChild(bookImage);

        let bookInfoContainer = document.createElement("div");
        bookInfoContainer.classList = "book-info";

        let bookTitle = document.createElement("h3");
        bookTitle.classList = "book-title";
        bookTitle.innerHTML = book.volumeInfo.title;
        bookInfoContainer.appendChild(bookTitle);

        let bookAuthor = document.createElement("p");
        bookAuthor.classList = "book-author";
        bookAuthor.innerHTML = `By ${book.volumeInfo.authors?.[0] || "Unknown"}`;
        bookInfoContainer.appendChild(bookAuthor);

        let bookDate = document.createElement("p");
        bookDate.classList = "book-date";
        bookDate.innerHTML = `Published : ${book.volumeInfo.publishedDate || "N/A"}`;
        bookInfoContainer.appendChild(bookDate);

        bookCard.appendChild(bookInfoContainer);
        booksContainer.appendChild(bookCard);

        // 🔗 On card click, open book link in new tab
        bookCard.addEventListener('click', () => {
            window.open(book.volumeInfo.infoLink, "_blank");
        });
    });
}

// Toggle between Grid and List Views
toggleView.addEventListener('click', () => {
    let currentView = booksContainer.className;

    if (currentView == 'grid-view') {
        booksContainer.classList = "list-view";
        toggleView.innerHTML = "Toggle to Grid View";
    } else { 
        booksContainer.classList = "grid-view";
        toggleView.innerHTML = "Toggle to List View";
    }
});

// Live Search Handler
searchInput.addEventListener('input', (e) => {
    let searchedText = e.target.value;
    showBooks(searchedText);
});

// Load More Handler
loadMore.addEventListener('click', async () => {
    currentPage++; // Go to next page
    const newBooks = await getBooks(currentPage); // Fetch new page data
    books = [...books, ...newBooks]; // Merge old + new books
    showBooks(searchInput.value); // Re-render with current search
});