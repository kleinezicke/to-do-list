function toDo(title, description){

    this.title = title;
    this.description = description;
    this.complete = false;
    this.id = createId();

}

function createId(){
    return  new Date().getTime().toString(32) + Math.floor(Math.random() * 1000).toString();
}

export default toDo;