import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

// console.log(form);
// console.log(email);
// console.log(message);

const savedData = localStorage.getItem("feedback-form-state");
const parsedData = JSON.parse(savedData);

let formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

savedFormState();

function onFormInput(evt) {
   formData = {email: email.value, message: message.value};
  // console.log(formData);
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

function savedFormState() {
  
  if (savedData) {
    email.value = parsedData.email;
    message.value = parsedData.message;
  }
};


function onFormSubmit(evt) {
  evt.preventDefault();

  // const {email, message} = evt.currentTarget.elements;
  // console.log(email.value);
  // console.log(message.value);

  if (email.value.trim() === '' || message.value.trim() === '') {
    alert("Bсе поля должны быть заполнены!");
    return;
  };

  console.log(parsedData);

  evt.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
};

