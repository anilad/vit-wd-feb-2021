console.log("JavaScript successfully loaded");

function addTask(){
    var taskInput = document.getElementById("taskInput");
    var whatUserTyped = taskInput.value;

    var newlyCreatedLi = document.createElement('li')
    newlyCreatedLi.innerText = whatUserTyped;

    var taslkListElement = document.getElementById("taskList");
    taslkListElement.appendChild(newlyCreatedLi);
}