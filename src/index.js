function generateQuote(event) {
    event.preventDefault();

new Typewriter("#quote", {
  strings: "You are my heart, my life, my one and only thought.",
  autoStart: true,
  delay: 1,
  cursor: "",
});

}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);