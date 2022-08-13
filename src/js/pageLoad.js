import group from "./groups";
import toDo from "./toDo";

function pageLoad(){

    const defaultGroup = new group("Default");

    const button = document.getElementById("create-todo");
    button.addEventListener("click", function(){

        defaultGroup.toDos.push(new toDo(document.getElementById("title").value, document.getElementById("description")))

        console.log(defaultGroup)

    })

}

export default pageLoad;