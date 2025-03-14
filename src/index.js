function displayQuote(response) {
    console.log("quote generated");
    new Typewriter("#quote", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generateQuote(event) {
    event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "fbato6d93eb4607e65fcafdf6a781743";
let context = "You are a fantastic Quote expert and love to write short quotes. Your mission is to generate 4 lines of quotes in basic HTML and separate the lines with <br />. Make sure to follow the user instructions. Do not include a title to the quotes. Sign the quotes with 'Oprah Tee' inside a <strong> element below the quotes and NOT above them";
let prompt = 'User instructions: Generate a quote about ${instructionsInput.value}'; 
let apiURL = 'https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}';

console.log("Generating quote");
console.log('Prompt: ${prompt}');
console.log('Context: ${context}');

axios.get(apiURL).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);