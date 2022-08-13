const domEdit = {

    createToDo: function(toDo){

        const container = document.getElementById("toDos");

        const newDiv = create(container,"div")
        newDiv.classList.add("todo")
        newDiv.id = toDo.id;

        const editButton = create(newDiv, "button");
        editButton.classList.add("edit-button")
        editButton.textContent = "Edit";

        const removeButton = create(newDiv,"button");
        removeButton.classList.add("removeButton");
        removeButton.textContent = "X";

        const title = create(newDiv,"h3");
        const description = create(newDiv,"p");

        title.textContent = toDo.title;
        description.textContent = toDo.description;

    }
}

function create(container,tag) {

    const parent = container;

    const child = document.createElement(tag)
    
    parent.appendChild(child);

    return child;
}

export default domEdit;