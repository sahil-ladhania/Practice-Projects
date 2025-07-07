// Select the container for the video cards
let video_grid = document.querySelector(".video-grid");

const API_URL = `https://api.freeapi.app/api/v1/public/youtube/videos`;

// Fetch video data from the API
async function fetchVideos() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Something went wrong !!!, Status: ${response.status}`);
    }
    const videoData = await response.json();
    return videoData.data.data;
  } catch (error) {
    console.error("Error fetching videos :", error);
    return null;
  }
}

// Create and append video cards based on fetched video data
async function listVideos() {
  const videos = await fetchVideos();
  
  // Iterate through each video object
  videos.map((video) => {
    // Get video ID from the API data
    let videoId = video.items.id;
    
    // Create an anchor element that wraps the video card
    let anchor = document.createElement("a");
    anchor.classList.add("video-card");
    anchor.setAttribute("href", `https://www.youtube.com/watch?v=${videoId}`);
    anchor.setAttribute("target", "_blank");
    anchor.setAttribute("rel", "noopener noreferrer");
    
    // Create the thumbnail container and image element
    let thumbnail = document.createElement("div");
    thumbnail.classList.add("thumbnail");
    let image = document.createElement("img");
    image.src = video.items.snippet.thumbnails.medium.url;
    thumbnail.appendChild(image);
    
    // Create the container for video details (title, channel, stats)
    let videoDetails = document.createElement("div");
    videoDetails.classList.add("video-details");
    
    // Create and populate the video title element
    let videoTitle = document.createElement("h3");
    videoTitle.classList.add("video-title");
    videoTitle.innerHTML = video.items.snippet.title;
    
    // Create and populate the channel name element
    let channelName = document.createElement("p");
    channelName.classList.add("channel-name");
    channelName.innerHTML = video.items.snippet.channelTitle;
    
    // Create the container for video statistics (views, likes, comments)
    let videoStats = document.createElement("div");
    videoStats.classList.add("video-stats");
    
    // Create and populate the views element with an icon
    let views = document.createElement("span");
    let viewsIcon = document.createElement("i");
    viewsIcon.classList.add("fas", "fa-eye");
    views.appendChild(viewsIcon);
    views.classList.add("views");
    // Note: Using innerHTML here overwrites the icon if not handled properly.
    views.innerHTML = `${video.items.statistics.viewCount} views`;
    
    // Create and populate the likes element with an icon
    let likes = document.createElement("span");
    let likesIcon = document.createElement("i");
    likesIcon.classList.add("fas", "fa-thumbs-up");
    likes.appendChild(likesIcon);
    likes.classList.add("likes");
    likes.innerHTML = `${video.items.statistics.likeCount} likes`;
    
    // Create and populate the comments element with an icon
    let comments = document.createElement("span");
    let commentsIcon = document.createElement("i");
    commentsIcon.classList.add("fas", "fa-comments");
    comments.appendChild(commentsIcon);
    comments.classList.add("comments");
    comments.innerHTML = `${video.items.statistics.commentCount} comments`;
    
    // Append stats elements to the videoStats container
    videoStats.appendChild(views);
    videoStats.appendChild(likes);
    videoStats.appendChild(comments);
    
    // Append video title, channel name, and stats to the videoDetails container
    videoDetails.appendChild(videoTitle);
    videoDetails.appendChild(channelName);
    videoDetails.appendChild(videoStats);
    
    // Append the thumbnail and video details to the main anchor element
    anchor.appendChild(thumbnail);
    anchor.appendChild(videoDetails);
    
    // Append the complete video card to the grid
    video_grid.appendChild(anchor);
  });
}

listVideos();