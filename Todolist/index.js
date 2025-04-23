function formsubmit(event) {
  event.preventDefault();
  const inputs = document.querySelectorAll("form input");
  const ul = document.getElementById("todo-list");

  const li = document.createElement("li");
  const buttonDone = document.createElement("button");
  const buttonDelete = document.createElement("button");
  buttonDone.textContent = "Done";
  buttonDelete.textContent = "Delete";

  let tasklist = [];
  inputs.forEach((input) => {
    if (input.value.trim() !== " ") {
      tasklist.push(input.value);
    }
  });
  li.textContent = tasklist.join("  ");
  li.appendChild(buttonDone);
  li.appendChild(buttonDelete);
  ul.appendChild(li);

  buttonDone.onclick = () => {
    const ul2 = document.getElementById("completed");
    const completedli = document.createElement("li");
    completedli.textContent = tasklist.join("");
    ul2.appendChild(completedli);
    li.remove();
  };
  buttonDelete.onclick = () => {
    li.remove();
  };
  document.querySelector("form").reset();
}

function showTaskForm() {
  if (form.style.display === "flex") {
    form.style.display = "none";
  } else {
    form.style.display = "flex";
  }
}
