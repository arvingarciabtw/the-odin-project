class Project {
  constructor(name) {
    this.name = name;
    this.listOfTodos = [];
  }

  addTodo(todo) {
    const arr = this.listOfTodos;
    arr.push(todo);
  }
}

export default Project;
