// Get the form and list elements
var form = document.getElementById("todoForm");
var list = document.getElementById("todoList");

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

     // Get the todo input value
    var todoInput = document.getElementById("todoInput");
    var todoText = todoInput.value.trim();

    if (todoText !== "") {
        // Create a new list item
        var listItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        var span = document.createElement("span");
        span.textContent = todoText;
        listItem.appendChild(checkbox);
        listItem.appendChild(span);
   
        // Add the list item to the list
        list.appendChild(listItem);

        // Reset the input field
        todoInput.value = "";
    }
});

// Add a click event listener to the list
list.addEventListener("click", function (event) {
    if (event.target.type === "checkbox") {
        var listItem = event.target.parentNode;
        listItem.classList.toggle("completed");

        // Check if the task is completed
        if (listItem.classList.contains("completed")) {
            // Remove the completed task after a delay
            setTimeout(function () {
                listItem.remove();
            }, ); // Change the delay as needed
        }
    }
});
