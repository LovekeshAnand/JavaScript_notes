const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.querySelector('.entertask');
    const task = taskInput.value;
    const taskList = document.querySelector('#list');
    const myArr = [];

    // Create a new list item element
    const newTask = document.createElement('li');
    newTask.textContent = task;

    // Append the new task to the task list
    taskList.appendChild(newTask);

    // Add the new task to the array (if needed)
    myArr.unshift(newTask.textContent);
    console.log(myArr);

    // Clear the input field
    taskInput.value = '';
});
