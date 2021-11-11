const upButton = document.querySelector(".navigationUp");
const downButton = document.querySelector(".navigationDown");
const items = document.querySelectorAll(".cartItem");
let scrollCounter;

document.querySelector(".cartIcon").addEventListener("click", function () {
  document.querySelector(".cart").classList.toggle("showCart");
  resetView();
});

function resetView() {
  items[0].scrollIntoView();
  scrollCounter = 0;
  refreshButtons();
}

upButton.addEventListener("click", scrollUp);
downButton.addEventListener("click", scrollDown);

function scrollUp() {
  scrollCounter--;
  items[scrollCounter].scrollIntoView();
  refreshButtons();
}

function scrollDown() {
  scrollCounter++;
  items[scrollCounter].scrollIntoView();
  refreshButtons();
}

function refreshButtons() {
  if (scrollCounter == 0) {
    upButton.disabled = true;
  } else {
    upButton.disabled = false;
  }
  if (scrollCounter == items.length - 3) {
    downButton.disabled = true;
  } else {
    downButton.disabled = false;
  }
}
