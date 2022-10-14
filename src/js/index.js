import group from "./groups";
import toDo from "./toDo";
import domEdit from "./domEdit";

let currentGroup;
let groups = [];

function pageLoad(){

    const defaultGroup = new group("Default");
    currentGroup = defaultGroup;
    groups.push(defaultGroup);

    domEdit.createGroup(defaultGroup);

    const button = document.getElementById("create-todo");
    button.addEventListener("click", function(){

        const newTodo = new toDo(document.getElementById("title").value, document.getElementById("description").value);
        domEdit.createToDo(newTodo);

        currentGroup.toDos.push(newTodo);

        console.log(currentGroup);
        console.log(groups);

    })
    
    document.addEventListener("click", function(event){
        if(event.target.classList.contains("remove-button")) {
            event.target.parentNode.remove();
            currentGroup.remove(event.target.parentNode.id)
        }
    })

};

pageLoad();