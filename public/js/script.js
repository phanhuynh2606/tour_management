// <!-- Initialize Swiper -->
var imagesThumbnail = new Swiper(".imagesThumbnail", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".imagesMain", {
    spaceBetween: 10,
    effect: "cube",
    // zoom: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: imagesThumbnail,
    },
  });