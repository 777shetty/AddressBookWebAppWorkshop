var script = document.createElement('script');
script.src = "../Js/contact.js";
document.head.appendChild(script);

window.addEventListener('DOMContentLoaded', (event) => {

  const name = document.querySelector('#name');
  name.addEventListener('input', function () {
    let names = document.querySelector('#name').value;
      try {
        (new Contact()).name = names;
        setErrorText('.name-error', "");
      } catch (e) {
        setErrorText('.name-error', e);
      }
   
  });

  const addressElement = document.querySelector('#address');
  addressElement.addEventListener('input', function () {
    let address = document.querySelector('#address').value;
    let words = address.split(" ");
    if (address == "") {
      setErrorText('.address-error', "");
      return;
    }
    if (words.length > 1) {
      try {
        (new Contact()).address = address;
        setErrorText('.address-error', "");
      } catch (e) {
        setErrorText('.address-error', e);
      }
    }
    else {
      setErrorText('.address-error', "Address should have multiple words");
    }
  });

  const phoneElement = document.querySelector('#phone');
  const phoneError = document.querySelector('.phone-error');
  phoneElement.addEventListener('input', function () {
    if (phoneElement.value == "") {
      setErrorText('.phone-error', "");
      return;
    }
    try {
      (new Contact()).phone = phoneElement.value;
      setErrorText('.phone-error', "");
    } catch (e) {
      setErrorText('.phone-error', e);
    }

  });
  const zipElement = document.querySelector('#zip');
  zipElement.addEventListener('input', function () {
    if (zipElement.value == "") {
      setErrorText('.zip-error', "");
      return;
    }
    try {
      (new Contact()).zip = zipElement.value;
      setErrorText('.zip-error', "");
    } catch (e) {
      setErrorText('.zip-error', e);
    }

  });
  let button = document.getElementById("submit-button");
  name.addEventListener('input', function () {
    if (name.value == "") {
      button.classList.remove("submit-button");
      button.classList.add("submit-button-disabled");
    } else {
      activateSubmitButton(button);
    }
  });
});
const activateSubmitButton = () => {
  let button = document.getElementById("submit-button");

  button.classList.remove("submit-button-disabled");
  button.classList.add("submit-button");
  button.disabled = false;
}
const setErrorText = (errorName, errorMessage) => {
  const textError = document.querySelector(errorName);
  textError.textContent = errorMessage;
  return;
}