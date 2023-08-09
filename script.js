const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="doneButton">Done</button>
            <button class="removeButton">Remove</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

taskList.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("doneButton")) {
        const taskItem = target.parentNode;
        taskItem.classList.toggle("done");
    } else if (target.classList.contains("removeButton")) {
        const taskItem = target.parentNode;
        taskList.removeChild(taskItem);
    }
});
