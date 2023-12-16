const videoThumbnails = document.querySelectorAll(
    ".thumbnail"
);
const videoPlayer = document.querySelector(
    ".featured-video iframe"
);
const videoTitle = document.querySelector(".featured-title");

const showVideo = (videoId, title) => {
    let videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
    videoPlayer.setAttribute("src", videoUrl);
    videoTitle.innerHTML = title;
};

videoThumbnails.forEach((v) => {
    v.addEventListener("click", () => {
        showVideo(v.dataset.id, v.dataset.title);
    });
});
