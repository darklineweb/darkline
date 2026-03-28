const videos = [
  { file: "assets/videos/video1.mp4", title: "Sad Edit 💔" },
  { file: "assets/videos/video2.mp4", title: "Attitude 🔥" }
];

const feed = document.getElementById("feed");

videos.forEach(v => {
  let div = document.createElement("div");
  div.className = "video-item";

  div.innerHTML = `
    <video src="${v.file}" autoplay muted loop></video>
    <h2>${v.title}</h2>
  `;

  feed.appendChild(div);
});const videos = [
  { file: "assets/videos/video1.mp4", title: "Sad Edit 💔" },
  { file: "assets/videos/video2.mp4", title: "Attitude 🔥" }
];

const feed = document.getElementById("feed");

videos.forEach(v => {
  let div = document.createElement("div");
  div.className = "video-item";

  div.innerHTML = `
    <video src="${v.file}" autoplay muted loop></video>
    <h2>${v.title}</h2>
  `;

  feed.appendChild(div);
});
