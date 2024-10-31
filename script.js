const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Будь ласка, введіть завдання.');
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    const removeTaskBtn = document.createElement('button');
    removeTaskBtn.textContent = 'Видалити';
    removeTaskBtn.classList.add('remove'); 
    
    removeTaskBtn.addEventListener('click', function() {
        newTask.remove();
    });

    newTask.appendChild(removeTaskBtn);
    taskList.appendChild(newTask);

    taskInput.value = '';
}

addTaskBtn.addEventListener('click', addTask);
