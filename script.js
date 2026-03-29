let currentIndex = 0;
let allImages = document.querySelectorAll(".gallery-item");

function filterSelection(category) {
  allImages.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

function openLightbox(img) {
  let visibleImages = Array.from(allImages).filter(i => i.style.display !== "none");

  currentIndex = visibleImages.indexOf(img);

  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;

  window.currentVisibleImages = visibleImages;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % window.currentVisibleImages.length;
  document.getElementById("lightbox-img").src =
    window.currentVisibleImages[currentIndex].src;
}

function prevImage() {
  currentIndex =
    (currentIndex - 1 + window.currentVisibleImages.length) %
    window.currentVisibleImages.length;

  document.getElementById("lightbox-img").src =
    window.currentVisibleImages[currentIndex].src;
}