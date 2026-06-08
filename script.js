function addTask() {

    let input = document.getElementById("taskInput");

    if(input.value === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerText = input.value;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function clearTasks() {
    document.getElementById("taskList").innerHTML = "";
}