const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const handleInput = (event) => {
  let userName = event.target.value.trim();
  if (userName === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = userName;
  }
};

nameInput.addEventListener("input", handleInput);
