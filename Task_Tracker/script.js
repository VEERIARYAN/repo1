const newtaskinput = document.getElementById('newtask');
const addBtn = document.getElementById('addBtn');
const tasklist = document.getElementById('tasklist');

function addtask() {
    const newtaskText = newtaskinput.value;
    if (!newtaskText.trim()) return; // Don't add empty tasks

    newtaskinput.value = ''; // Clear input field

    // Create elements
    const listitem = document.createElement('li');
    const completeCheckbox = document.createElement('input');
    const taskText = document.createElement('span');
    const updateBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    // Set attributes and text content
    completeCheckbox.type = 'checkbox';
    taskText.textContent = newtaskText;
    deleteBtn.textContent = 'Delete';
    updateBtn.textContent = 'Update';

    // Append elements to list item
    listitem.appendChild(completeCheckbox);
    listitem.appendChild(taskText);
    listitem.appendChild(updateBtn);
    listitem.appendChild(deleteBtn);

    // Append list item to task list
    tasklist.appendChild(listitem);

    // Add event listener for delete button
    deleteBtn.addEventListener('click', function() {
        tasklist.removeChild(listitem);
    });

    // Add event listener for update button
    updateBtn.addEventListener('click', function() {
        const newTaskText = prompt('Update task:', taskText.textContent);
        if (newTaskText !== null && newTaskText.trim()) {
            taskText.textContent = newTaskText;
        }
    });
}

// Add event listener for add button
addBtn.addEventListener('click', addtask);