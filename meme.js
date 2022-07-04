const btn = document.getElementById("generator-btn");
const form = document.querySelector("form");
const memeDisplay = document.getElementById("meme-grid");

form.addEventListener("submit", function (e) {
  // Set default behavior
  e.preventDefault();

  // Create div to store new meme's
  const newMeme = document.createElement("div");

  // Image
  const imageUrl = document.getElementById("url").value;
  const image = document.createElement("img");
  image.src = imageUrl;

  // Text
  const topText = document.getElementById("top-text").value;
  const bottomText = document.getElementById("bottom-text").value;
  const pTop = document.createElement("p");
  const pBottom = document.createElement("p");
  pTop.innerText = topText;
  pBottom.innerText = bottomText;

  // Set classes
  newMeme.classList.add("meme");
  image.classList.add("image");
  pTop.classList.add("p-top");
  pBottom.classList.add("p-bottom");

  // Appending html elements
  newMeme.append(image, pTop, pBottom);
  memeDisplay.append(newMeme);

  // Clear inputs
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.value = "";
  });
});
