// Select DOM elements for displaying the quote text and author
let quoteText = document.querySelector(".quote-text");
let quoteAuthor = document.querySelector(".quote-author");

// Select buttons for new quote, copy quote, and share on Twitter functionalities
let newQuoteButton = document.querySelector("#new-quote");
let copyQuoteButton = document.querySelector("#copy-quote");
let shareQuoteButton = document.querySelector("#share-quote");

// API URL for fetching random quotes
const API_URL = "https://api.freeapi.app/api/v1/public/quotes/quote/random";

// Asynchronous function to fetch a random quote from the API
async function fetchRandomQuote() {
    try {
        let response = await fetch(API_URL);
        let quoteData = await response.json();
        return quoteData;
    } catch (error) {
        // Throw an error if fetching fails
        throw new Error("Something went wrong !!!", error);
    }
}

// Function to display the fetched quote on the page
async function showQuote() {
    let newQuote = await fetchRandomQuote();
    let quoteContent = newQuote.data.content;
    let quoteAuthorName = newQuote.data.author;

    // Update the DOM elements with the fetched quote and its author
    quoteText.innerHTML = `"${quoteContent}"`;
    quoteAuthor.innerHTML = `~${quoteAuthorName}`;
}

// Event listener to fetch and display a new quote when the button is clicked
newQuoteButton.addEventListener('click', () => {
    showQuote();        
});

// Display a quote when the page loads
showQuote();

// Function to copy the current quote to the clipboard
function copyToClipboard() {
    let quoteTextContent = quoteText.innerHTML;
    let quoteAuthorContent = quoteAuthor.innerHTML;
    let formattedDataToCopy = `${quoteTextContent} ${quoteAuthorContent}`;

    navigator.clipboard.writeText(formattedDataToCopy)
        .then(() => {
            // Alert the user upon successful copy
            alert("Successfully Copied the Quote...");
        })
        .catch((error) => {
            // Alert the user if an error occurs during copying
            alert("Error while copying...", error);
        });
}

// Event listener for the copy quote button
copyQuoteButton.addEventListener('click', () => {
    copyToClipboard();
});

// Function to share the current quote on Twitter
function shareOnTwitter() {
    let quoteTextContent = quoteText.innerHTML;
    let quoteAuthorContent = quoteAuthor.innerHTML;
    let formattedDataToCopy = `${quoteTextContent} ${quoteAuthorContent}`;

    // Construct the Twitter intent URL with the encoded quote text
    let tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(formattedDataToCopy)}`;
    // Open the Twitter share window in a new tab
    window.open(tweetUrl, "_blank");
}

// Event listener for the share on Twitter button
shareQuoteButton.addEventListener('click', () => {
    shareOnTwitter();
});