function group(name) {
    
    this.name = name;
    this.toDos = [];

    this.remove = function(id){

        for (let i = 0; i < this.toDos.length; i++) {
            if (this.toDos[i].id == id) {
                this.toDos.splice(i, 1);
                console.log(this.toDos);
            }
        }

    }
}

export default group;