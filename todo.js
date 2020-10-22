const toDoForm = document.querySelector(".js-whatToDo"),
  toDoInput = toDoForm.querySelector("#js-input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LOCALSTORAGE = "toDos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LOCALSTORAGE, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  doneBtn = document.createElement("button");
  delBtn.innerText = "delete";
  doneBtn.innerText = "done";
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn),
  li.appendChild(doneBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  saveToDos();
  toDos.push(toDoObj);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LOCALSTORAGE);
  if (loadedToDos !== null) {
    console.log(loadToDos);
    const parsedToDos = JSON.parse(loadedToDos);
    console.log(parsedToDos);
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();