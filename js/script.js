const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Bagian toggle untuk memunculkan search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.getElementById("search-box");

document.getElementById("search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Bagian toggle untuk memunculkan shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.getElementById("shopping-btn").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Bagian toggle untuk memunculkan modal box
const modalBox = document.querySelector(".modal-box");

document.getElementById("detail-product-btn").onclick = (e) => {
  modalBox.style.display = "flex";
  e.preventDefault();
};

const closemodalBtn = document.getElementById("close-icon-modal");

closemodalBtn.onclick = (e) => {
  modalBox.style.display = "none";
  e.preventDefault();
};

const hamburger = document.querySelector("#hamburger");
const searcBtn = document.getElementById("search-btn");
const shoppingBtn = document.getElementById("shopping-btn");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searcBtn.contains(e.target) && !searchForm.contains(e.terget)) {
    searchForm.classList.remove("active");
  }

  if (!shoppingBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// untuk menghilangkan modal box diluar tanda X

window.onclick = (e) => {
  if (e.target === modalBox) {
    modalBox.style.display = "none";
  }
};
