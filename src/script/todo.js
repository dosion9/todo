let todoId = 0;

class Todo {
  constructor(title, content, id) {
    this.title = title;
    this.content = content;
    this.id = id;
    this.isDone = false;
    this.state = "Working";
    this.timeStemp = new Date();
  }
  toggleDone() {
    this.isDone = !this.isDone;
    this.changeState();
  }
  changeState() {
    this.state === "Working" ? (this.state = "Done") : (this.state = "Working");
  }
}

function createTodo(title, content) {
  const todo = new Todo(title, content, todoId);
  todoId++;
  return todo;
}

export default createTodo;
