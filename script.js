const hamburger = document.querySelector(".hamburger");
const menuItemContainer = document.querySelector(".menu-item-container");
const menu = document.querySelector(".menu");
const galleryImages = document.querySelectorAll(".gallery-photos img");
const galleryFilterSelect = document.querySelector(".image-select");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector("#lightbox-img");

lightbox.addEventListener("click", function () {
  lightbox.classList.add("hide-lightbox");
});

galleryImages.forEach((image) =>
  image.addEventListener("click", function () {
    const clickedImgSrc = image.src;
    lightboxImg.src = clickedImgSrc;
    lightbox.classList.remove("hide-lightbox");
  })
);

hamburger.addEventListener("click", function () {
  menuItemContainer.classList.toggle("menu-display");
  menu.classList.toggle("remove-border");
});

galleryFilterSelect.addEventListener("change", function (event) {
  galleryImages.forEach(function (image) {
    const imgCategory = image.dataset.category;
    const selectedCategory = event.target.value;

    if (selectedCategory === imgCategory || selectedCategory === "all") {
      image.classList.remove("hide-image");
      AOS.refresh();
    } else {
      image.classList.add("hide-image");
      AOS.refresh();
    }
  });
});

AOS.init();
