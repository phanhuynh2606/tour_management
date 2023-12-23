// Vẽ ra danh sách tour
const drawListTours = () =>{
    fetch("/cart/list-json", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: localStorage.getItem("cart"),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          const htmlsArray = data.tours.map((item, index) => {
            return `
              <tr>
                  <td>${index + 1}</td>
                  <td>
                      <img src=${item.image} alt=${item.info.title} width="80px" />
                  </td>
                  <td>
                      <a href='/tours/detail/${item.info.slug}'>${
              item.info.title
            }</a> 
                  </td>
                  <td>
                      ${item.price_special.toLocaleString()}
                  </td>
                  <td>
                      <input
                      type="number"
                      name="quantity"
                      value="${item.quantity}"
                      min="1"
                      item-id="${item.tourId}"
                      style="width: 60px" />
                  </td>
                  <td>${item.total.toLocaleString()} </td>
                  <td>
                      <button btn-delete="${
                        item.tourId
                      }" class="btn btn-sm btn-danger">Xóa</button> 
                  </td>
              </tr>
              `;
          });
          const listTour = document.querySelector("[list-tour]");
          listTour.innerHTML = htmlsArray.join("");
      
          // Tính tổng đơn hàng
          const totalPrice = data.tours.reduce((sum, item) => sum + item.total, 0);
          const elementTotalPrice = document.querySelector("[total-price]");
          elementTotalPrice.innerHTML = totalPrice.toLocaleString();
          // Tính tổng đơn hàng
          deleteItemInCart();
        });
}
// Vẽ ra danh sách tour

// Xoá sản phẩm trong giỏ hàng
const deleteItemInCart = () => {
  const listBtnDelete = document.querySelectorAll("[btn-delete]");
  listBtnDelete.forEach((button) => {
    button.addEventListener("click", () => {
        const tourId = button.getAttribute("btn-delete");
        console.log(tourId);
        const cart = JSON.parse(localStorage.getItem("cart"));

        const newCart = cart.filter(item => item.tourId != tourId);
        localStorage.setItem("cart",JSON.stringify(newCart));
        drawListTours();
    });
  });
};
// Hết xoá sản phẩm trong giỏ hàng

// Lấy ra data và in ra giao diện
drawListTours();
// Hết Lấy ra data và in ra giao diện
