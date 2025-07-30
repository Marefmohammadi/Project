const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                tasks.push({ text: taskText});
                taskInput.value = "";
                displayTasks();
            }
        }

function displayTasks() {
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
                li.querySelector("input").addEventListener("change", () => toggleTask(index));
                taskList.appendChild(li);
            });
        }

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
        tasks = tasks.filter(task => !task.completed);
        displayTasks();
    }


addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

 displayTasks();
/// BOM functions
//acces HTML elements

const alertBtn = document.getElementById("alerBtn");
const windowBtn = document.getElementById("windowBtn");
const backBtn = document.getElementById("backBtn");
const changURLBtn = document.getElementById("changURLBtn");

//Attach event listeners

alertBtn.addEventListener('click',() => {
    window.alert("Hello, this is an alert");
});

windowBtn.addEventListener('click', () => {
    window.open('www.w3schools.com', 'blank');
});

backBtn.addEventListener('click', () => {
    history.back();
});

changURLBtn.addEventListener('click', () =>{
    location.href= "https://example.com";  
});

const parent = document.getElementById("parent");
const firstChild = parent.firstChild;
const lastChild = parent.lastChild;

console.log(firstChild.textContent);
console.log(lastChild);

const button = document.getElementById("myBtn");
button.style.backgroundColor = "blue";
button.style.color ="white";
button.style.fontSize = "16px";
button.style.borderRadius = "3px";
