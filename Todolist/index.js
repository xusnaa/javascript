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
    completedli.textContent = li.textContent.replace("Done,Delete", "").trim();
    ul2.appendChild(completedlili);
  };
  document.querySelector("form").reset();
}

function showTaskForm() {
  const button = document.getElementsByClassName("buttonTask");
  button.onclick = () =>
    (document.querySelector("form").style.display = "flex");
}
