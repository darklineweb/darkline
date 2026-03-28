// ==========================
// VIDEO DATA
// ==========================
const videos = [
  {
    title: "Sad Love Edit 💔",
    file: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Attitude Edit 🔥",
    file: "https://www.w3schools.com/html/movie.mp4"
  }
];

// ==========================
// DOM ELEMENTS
// ==========================
const container = document.getElementById("videoContainer");
const search = document.getElementById("search");

// ==========================
// DISPLAY VIDEOS FUNCTION
// ==========================
function displayVideos(list) {
  container.innerHTML = ""; // clear container

  if (list.length === 0) {
    container.innerHTML = `<p style="text-align:center;color:#ff8c42;">No videos found.</p>`;
    return;
  }

  list.forEach(video => {
    // Create video card div
    const card = document.createElement("div");
    card.className = "video-card";

    // Add HTML inside card
    card.innerHTML = `
      <video controls>
        <source src="${video.file}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <h3>${video.title}</h3>
    `;

    container.appendChild(card);
  });
}

// ==========================
// SEARCH FILTER
// ==========================
search.addEventListener("input", () => {
  const query = search.value.toLowerCase();
  const filtered = videos.filter(v => v.title.toLowerCase().includes(query));
  displayVideos(filtered);
});

// ==========================
// INITIAL DISPLAY
// ==========================
displayVideos(videos);
