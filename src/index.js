function generateQuote(event) {
    event.preventDefault();

new Typewriter("#quote", {
  strings: "Life is the flower for which love is the honey",
  autoStart: true,
  delay: 1,
  cursor: "",
});

}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);