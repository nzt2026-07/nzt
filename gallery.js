document.querySelectorAll(".image-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const front = button.querySelector(".card-front");
    const back = button.querySelector(".card-back");

    button.setAttribute("aria-expanded", String(!isExpanded));
    button.setAttribute(
      "aria-label",
      isExpanded ? `Rezept anzeigen: ${front.querySelector("img").alt}` : "Bild anzeigen"
    );
    front.setAttribute("aria-hidden", String(!isExpanded));
    back.setAttribute("aria-hidden", String(isExpanded));
  });
});
