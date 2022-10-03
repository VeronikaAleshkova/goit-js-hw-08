import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

// console.log(form);
// console.log(email);
// console.log(message);

const savedData = localStorage.getItem("feedback-form-state");
const parsedData = JSON.parse(savedData);

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

savedFormState();

function onFormInput(evt) {
  const value = evt.target.value;
  // console.log(value);
  localStorage.setItem("feedback-form-state", JSON.stringify({email: email.value, message: message.value}));
};

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  console.log(parsedData);
  localStorage.removeItem("feedback-form-state");
};

function savedFormState() {
  
  if (savedData) {
    email.value = parsedData.email;
    message.value = parsedData.message;
  }
}
