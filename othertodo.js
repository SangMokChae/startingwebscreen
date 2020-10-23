const toDoForm = document.querySelector(".js-toDoForm"),
  toDoinput = toDoForm.querySelector("input"),
  shortTerm = doucment.querySelector(".shortTerm"),
  longTerm = document.querySelector(".longTerm");

let shortPlens = [];
let longPlans = [];

PLANS_LS = "plans"

function deletePlan(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const ul = li.parentNode;
  shortTerm.removeChild(li);
  const cleanPlans = plans.filter(function(plan) {
    return plan.id !== parseInt(li.id);
  });
  plans = clranPlans;
  savePlans;
}

function movePlan(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const ul = li.parentNode;
  
}

function savePlans() {
  localStorage.setItem(PLANS_LS, JSON.stringify(plans));
}

function paintThings(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const moveBtn = document.createElement("button");
  const newId = shortPlens.length + 1;
  delBtn.innerText = "del";
  moveBtn.innerText = "move";
  delBtn.addEventListener("click", deletePlan);
  moveBtn.addEventListener("clcik", movePlan);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(moveBtn);
  shortTerm.appendChild(li);
  const planObj = {
    text,
    id;
  };
  plans.push(planObj);
  savePlans();
}

function loadThings() {
  const loadThing = localStorage.getItem(PLANS_LS);
  if (loadThing !== null) {
    paintThings(plan.text);
  }
}


function init() {
  loadThings();
}
init();