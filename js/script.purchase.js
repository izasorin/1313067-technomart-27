// MODAL PURCHASE
var purchaseLink = document.querySelectorAll(".buy");
var bookmarksLink = document.querySelectorAll(".bookmark");
var purchaseModal = document.querySelector(".modal-purchase");
var purchaseClose = document.querySelector(".modal-purchase .modal-close");
var purchaseResume = document.querySelector(".continue-button");
var cart = document.querySelector(".cart");
var bookmarks = document.querySelector(".bookmarks");

for (var i = 0; i < purchaseLink.length; i++) {
  purchaseLink[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    purchaseModal.classList.add("modal-show");
    cart.classList.add("head-navigation-active");
  });
}

for (var i = 0; i < bookmarksLink.length; i++) {
  bookmarksLink[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    bookmarks.classList.add("head-navigation-active");
  });
}

purchaseClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  purchaseModal.classList.remove("modal-show");
});

purchaseResume.addEventListener("click", function(evt) {
  evt.preventDefault();
  purchaseModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (purchaseModal.classList.contains("modal-show")) {
      evt.preventDefault();
      purchaseModal.classList.remove("modal-show");
    }
  }
});