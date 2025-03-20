// Get references to DOM elements
let moodButtonsContainer = document.querySelector(".mood-buttons");
let timelineList = document.querySelector(".timeline-list");
let listItem = document.querySelector(".list-item");

// Add a click event listener to the container of mood buttons
moodButtonsContainer.addEventListener('click', (e) => {
    // Check if a mood button was clicked using event delegation
    if (e.target.closest(".mood-btn")) {
        // Retrieve the selected mood from the button's data attribute
        const selectedMood = e.target.closest(".mood-btn").dataset.mood;
        // Log the mood to update both LocalStorage and the UI
        logMood(selectedMood);
    }
});

function logMood(mood) {
    // Create a new Date object to get the current date
    const DateTime = new Date();
    const date = DateTime.getDate();
    const month = DateTime.getMonth() + 1; // Adjust month (0-indexed)
    const year = DateTime.getFullYear();
    const formattedDate = `${date}/${month}/${year}`;

    // Construct the mood data string
    const moodData = `Your Mood on ${formattedDate} was ${mood}.`;

    // Retrieve the current mood data from LocalStorage, or initialize an empty object
    let moodDataObject = JSON.parse(localStorage.getItem("Mood Data")) || {};
    // Update the mood data for today
    moodDataObject.MoodData = moodData;
    // Store the updated mood data back into LocalStorage
    localStorage.setItem("Mood Data", JSON.stringify(moodDataObject));

    // Update the UI:
    // Check if a mood log element already exists in the timeline
    let existingMoodLog = timelineList.querySelector('.list-item');
    if (existingMoodLog) {
        // If it exists, update its content
        existingMoodLog.innerHTML = moodData;
    } else {
        // If not, create a new list item and append it to the timeline
        let newMood = document.createElement('li');
        newMood.classList.add('list-item');
        newMood.innerHTML = moodData;
        timelineList.appendChild(newMood);
    }
}

function showTodaysMood() {
    // Retrieve the mood data object from LocalStorage
    let todaysMoodData = JSON.parse(localStorage.getItem('Mood Data'));
    // Check if there is mood data for today
    if (todaysMoodData && todaysMoodData.MoodData) {
        // Create a new list item to display the mood log
        let newMood = document.createElement('li');
        newMood.classList.add('list-item');
        newMood.innerHTML = todaysMoodData.MoodData;
        timelineList.appendChild(newMood);
    }
}

// Display today's mood log when the page loads
showTodaysMood();