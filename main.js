const addItems = document.querySelector('.addItems');
const tasks = document.querySelector('.tasks');
const btn = document.querySelector('.btn');
const inputText = document.getElementById('inputText');
const errorMsg = document.getElementById('errorMsg')
 
function saveTasks() {
    localStorage.setItem("tasks", tasks.innerHTML);
}
function addTask() {

    if (inputText.value.trim() === "") {
        errorMsg.textContent = "Task can't be empty!!";
        return ;
    }
    errorMsg.textContent = "";

    const li = document.createElement('li');
    li.classList.add('task');

    li.innerHTML= `<i class="fa-regular fa-circle fa-check-circle"></i>${inputText.value}<i class="fa-solid fa-xmark"></i> `;

    tasks.append(li);

    inputText.value = "";
    saveTasks();
    
}

btn.addEventListener('click', addTask);

inputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')) {
        const li = e.target.parentElement;
        li.remove();
        saveTasks();
    }else{  
        e.target.classList.toggle('fa-circle');
        e.target.parentElement.classList.toggle('completed');
        saveTasks();
    }
});
function loadTasks(){
    tasks.innerHTML = localStorage.getItem("tasks") || "";
}

loadTasks();
