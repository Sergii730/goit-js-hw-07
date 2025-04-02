const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const elements = event.target.elements;
  const info = {
    email: elements.email.value,
    password: elements.password.value,
  };
  if (info.email === "" || info.password === "") {
    return alert("All form fields must be filled in");
  }
  console.log(info);
  event.target.reset();
};
form.addEventListener("submit", handleSubmit);
