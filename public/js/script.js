// Slider Tour Detail
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
// End Slider Tour Detail

// Thông báo them vào giỏ hàng thành công
const alertAddCartSuccess = () => {
  const elementAlert = document.querySelector("[alert-add-cart-success]");
  elementAlert.classList.remove("alert-hidden");
  setTimeout(() => {
    elementAlert.classList.add("alert-hidden");
  }, 3000);

  const closeAlert = elementAlert.querySelector("[close-alert]");
  closeAlert.addEventListener("click", () => {
    elementAlert.classList.add("alert-hidden");
  });
};
// Hết Thông báo them vào giỏ hàng thành công

// Mini Cart
const showMiniCart = () =>{
  const cart = JSON.parse(localStorage.getItem("cart"));
  const totalQuantity = cart.reduce((sum,item) => sum + item.quantity ,0);

  const miniCart = document.querySelector("[mini-cart]");
  miniCart.innerHTML = totalQuantity;
};
showMiniCart();
// Hết Mini Cart

// Carts

// Kiểm tra xem localStorage có tồn tại cart chưa , nếu chưa thì phải tạo cart mới
const cart = localStorage.getItem("cart");
console.log(cart);
if (!cart) {
  localStorage.setItem("cart", JSON.stringify([]));
}

// Thêm tour vào cart
const formAddToCart = document.querySelector("[form-add-to-cart]");
if (formAddToCart) {
  formAddToCart.addEventListener("submit", (e) => {
    e.preventDefault();

    const quantity = parseInt(e.target.elements.quantity.value);
    const tourId = parseInt(formAddToCart.getAttribute("tour-id"));
    if (quantity > 0 && tourId) {
      const cart = JSON.parse(localStorage.getItem("cart"));

      const isExistTour = cart.findIndex((item) => item.tourId === tourId);

      if (isExistTour == -1) {
        cart.push({
          tourId: tourId,
          quantity: quantity,
        });
      } else {
        cart[isExistTour].quantity = cart[isExistTour].quantity + quantity;
      }

      // console.log(cart);
      localStorage.setItem("cart", JSON.stringify(cart));

      alertAddCartSuccess();
      showMiniCart();
    }
  });
}
// End Carts
