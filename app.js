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

const container = document.getElementById("videoContainer");
const search = document.getElementById("search");

function displayVideos(list) {
container.innerHTML = "";
list.forEach(v => {
let el = document.createElement("div");
el.className = "video-card";
el.innerHTML = `
<h3>${v.title}</h3>
<video controls>
<source src="${v.file}" type="video/mp4">
</video>
`;
container.appendChild(el);
});
}

search.addEventListener("input", () => {
const value = search.value.toLowerCase();
const filtered = videos.filter(v => v.title.toLowerCase().includes(value));
displayVideos(filtered);
});

displayVideos(videos);
