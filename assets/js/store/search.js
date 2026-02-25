document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("store-search-input");
  if (!input) return;

  var cards = Array.from(document.querySelectorAll(".store-card"));

  input.addEventListener("input", function () {
    var query = input.value.toLowerCase().trim();

    cards.forEach(function (card) {
      var title = card.querySelector("h2");
      var text = title ? title.textContent.toLowerCase() : "";
      var matches = !query || text.indexOf(query) !== -1;

      if (!matches) {
        card.classList.add("card-hidden");
        card.addEventListener(
          "transitionend",
          function handler() {
            card.removeEventListener("transitionend", handler);
            if (card.classList.contains("card-hidden")) {
              card.style.display = "none";
            }
          }
        );
      } else {
        card.style.display = "";
        requestAnimationFrame(function () {
          card.classList.remove("card-hidden");
        });
      }
    });
  });
});
