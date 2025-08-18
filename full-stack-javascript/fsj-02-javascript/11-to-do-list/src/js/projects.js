class Project {
  constructor(name) {
    this.name = name;
    this.listOfTodos = [];
  }

  addTodo(todo) {
    const arr = this.listOfTodos;
    arr.push(todo);
  }

  deleteTodo(todo) {
    let arr = this.listOfTodos;
    this.listOfTodos = arr.filter((item) => item !== todo);
  }
}

export default Project;
