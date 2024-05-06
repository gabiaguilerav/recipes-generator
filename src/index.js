function displayRecipe(response) {
  console.log(response.data.answer);

  new Typewriter("#recipe-text", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 6,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "7145tacf48aad88be65c0b31aoec2f85";
  let context =
    "You are an AI that knows a lot about vegan food, be kind and give easy answers with tasty and quick vegan recipes. Separate every new sentence or step with a <br> element. Sign the recipe with '-SheCodes AI' at the end";
  let prompt = `Tell me a quick and easy vegan recipe based on the ingredients ${instructionsInput.value} that I have right now available at home`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("recipe-hidden");

  console.log("Generating recipe");
  console.log(`Prompt:${prompt}`);
  console.log(`context:${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeGenerator = document.querySelector("#generator-form");
recipeGenerator.addEventListener("submit", generateRecipe);
