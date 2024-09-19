const shareBtn = document.getElementById("shareBtn");
const shareMenu = document.getElementById("shareMenu");

shareBtn.addEventListener("click", function () {
  if (shareMenu.style.display === "none" || shareMenu.style.display === "") {
    shareMenu.style.display = "flex";
  } else {
    shareMenu.style.display = "none";
  }
});
