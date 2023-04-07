
const bgVideo = document.getElementById('bg-video');

function resizeVideo() {
  const width = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const height = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  if (width / height > 16 / 9) {
    bgVideo.style.width = width + 'px';
    bgVideo.style.height = 'auto';
  } else {
    bgVideo.style.width = 'auto';
    bgVideo.style.height = height + 'px';
  }
}

window.onload = function () {
  resizeVideo();

  // 4 saniye sonra video kayboluyor
  setTimeout(() => {
    bgVideo.style.opacity = 0;
  }, 2000);
};

window.onresize = resizeVideo;


const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

cartBtn.addEventListener("click", function () {
  cartItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cartItem)
    ) {
      cartItem.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});
