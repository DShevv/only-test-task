document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("item__button") ||
    e.target.classList.contains("item__button-label")
  ) {
    if (e.target.classList.contains("item__button")) {
      e.target.parentNode.classList.toggle("active");
    } else {
      e.target.parentNode.parentNode.classList.toggle("active");
    }
  } else {
    const ActiveButtonsList = document.querySelectorAll(".active");
    ActiveButtonsList.forEach((elem) => elem.classList.remove("active"));
  }
});
