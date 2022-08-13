import group from "./groups";
import toDo from "./toDo";
import domEdit from "./domEdit";

(function pageLoad(){

    const defaultGroup = new group("Default");

    const button = document.getElementById("create-todo");
    button.addEventListener("click", function(){

        const newTodo = new toDo(document.getElementById("title").value, document.getElementById("description").value);
        domEdit.createToDo(newTodo);

        defaultGroup.toDos.push(newTodo);

        console.log(defaultGroup);

    })

})