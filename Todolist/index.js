function formsubmit(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll("form input");
  let tasklist = [];
  inputs.forEach((input) => {
    if (input.value.trim() !== " ") {
      tasklist.push(input.value);
    }
  });

  if (tasklist.length === 0) {
    console.log("Please fill out at least one field.");
  } else {
    const ul = document.getElementById("todo-list");

    const li = document.createElement("li");
    const buttonDone = document.createElement("button");
    const buttonDelete = document.createElement("button");
    buttonDone.textContent = "Done";
    buttonDelete.textContent = "Delete";

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
}

function showTaskForm() {
  if (form.style.display === "flex") {
    form.style.display = "none";
  } else {
    form.style.display = "flex";
  }
}
