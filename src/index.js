function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe-text", {
    strings: "You must cook your vegetables...",
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}
let recipeGenerator = document.querySelector("#generator-form");
recipeGenerator.addEventListener("submit", generateRecipe);
