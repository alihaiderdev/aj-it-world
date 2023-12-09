const todos = JSON.parse(localStorage.getItem("todos")) || [];

console.log(localStorage.getItem("todos"), JSON.parse(localStorage.getItem("todos")), todos);

function addTodo() {
    // const titleValue = document.getElementById("title")?.value;
    // const descriptionValue = document.getElementById("description")?.value;

    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    if (!titleInput || !descriptionInput) {
        return;
    }
    const titleValue = titleInput?.value;
    const descriptionValue = descriptionInput.value;
    // if (titleInput === null || descriptionInput === null) {
    //     return
    // }
    // OR 
 
    if (!titleValue) {
        return alert("Title is required!");
    }
    // OR 
    // if (titleValue === "") {

    // }

    const todo = {
        title: titleValue,
        description: descriptionValue,
        // id: todos.length + 1,  // don't use this
        // id: Number((Math.random() * 1000).toFixed(0)),
        id: new Date().getTime(),
        // id: `${todos.length + 1}-${new Date().getTime()}`,
        isCompleted: false,
    };

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));

    console.log({
        // titleInput, descriptionInput,
        titleValue, descriptionValue, todo, todos
    });
    // const ul = document.getElementById("todo-list");
    // var li = document.createElement("li");
    // li.innerHTML = todo;
    // ul.appendChild(li);
    showTodos();
    showTodosCount();

    titleInput.value = "";
    descriptionInput.value = "";
}

function showTodos() {
    const ul = document.getElementById("todo-list");
    console.log({ ul });
    ul.innerHTML = "";
    if (todos.length > 0) {
        todos.forEach((todo) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <h3>Title: ${todo.title}</h3>
            ${todo.description ? `<p>Description: ${todo.description}</p>` : ""}
            <button class="btn btn-sm btn-danger me-2" onclick="deleteTodo(${todo.id})">Delete</button>
            <button class="btn btn-sm btn-primary" onclick="editTodo(${todo.id})">Edit</button>
        `;
        // li.style.backgroundColor = todo.isCompleted ? "green" : "red";
            ul.appendChild(li);
        });
    } else {
        ul.innerHTML = "<h3>No todos found!</h3>";
    }


}

window.onload = function () {
    showTodos();
    showTodosCount();

}

function deleteAllTodos() {
    const areYouSure = confirm("Are you sure to delete all todos?");
    console.log({ areYouSure });

    if (areYouSure) {
        localStorage.removeItem("todos");
        showTodos();
        showTodosCount();
    }
}


function showTodosCount() {
    const todosCount = document.getElementById("todos-count");
    todosCount.innerHTML = `Total todos: (${todos.length})`;
}