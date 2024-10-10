document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim(); // Get the input value and trim whitespace
        if (taskText) { // Only proceed if the input is not empty
            const li = document.createElement('li'); // Create a new list item
            li.textContent = taskText; // Set the text of the list item

            // Add a button to mark as completed
            const completeButton = document.createElement('button');
            completeButton.textContent = '✔️'; // Checkmark for completion
            completeButton.addEventListener('click', () => {
                li.classList.toggle('completed'); // Toggle the completed class
            });
            li.appendChild(completeButton); // Add the complete button to the list item

            // Add a button to remove the task
            const removeButton = document.createElement('button');
            removeButton.textContent = '❌'; // Crossmark for removal
            removeButton.addEventListener('click', () => {
                taskList.removeChild(li); // Remove the list item from the task list
            });
            li.appendChild(removeButton); // Add the remove button to the list item

            taskList.appendChild(li); // Add the new task to the list
            taskInput.value = ''; // Clear the input field after adding the task
        } else {
            alert("Please enter a task."); // Alert if input is empty
        }
    });

    // Optional: Allow adding tasks with the Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskButton.click(); // Simulate button click
        }
    });
});
