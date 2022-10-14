import group from "./groups";
import toDo from "./toDo";
import domEdit from "./domEdit";

let currentGroup;

function pageLoad(){

    const defaultGroup = new group("Default");
    currentGroup = defaultGroup;

    const button = document.getElementById("create-todo");
    button.addEventListener("click", function(){

        const newTodo = new toDo(document.getElementById("title").value, document.getElementById("description").value);
        domEdit.createToDo(newTodo);

        defaultGroup.toDos.push(newTodo);

        console.log(defaultGroup);

    })

    document.addEventListener("click", function(event){
        if(event.target.classList.contains("removeButton")) {
            event.target.parentNode.remove();
            currentGroup.remove(event.target.parentNode.id)
        }
    })

};

pageLoad();