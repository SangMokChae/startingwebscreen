const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

const USER_LOCALSTORAGE = "currentUser";
const SHOWING_CLASSNAME = "showing";

function saveUserName(text) {
  localStorage.setItem(USER_LOCALSTORAGE, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveUserName(currentValue);
}

function askForUserName() {
  form.classList.add(SHOWING_CLASSNAME);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CLASSNAME);
  greeting.classList.add(SHOWING_CLASSNAME);
  greeting.innerText = `Hi! ${text}.`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LOCALSTORAGE);
  if (currentUser === null) {
    askForUserName(SHOWING_CLASSNAME);
  } else {
    paintGreeting(currentUser);
  }
}


function init() {
  loadName();
}
init();