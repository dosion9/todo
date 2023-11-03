import React from "react";
import createTodo from "../../script/todoData";

function InputGroup(props) {
  const changeTitleHandler = (e) => {
    props.setTodoTitle(e.target.value);
  };

  const changeTodoContentHandler = (e) => {
    props.setTodoContent(e.target.value);
  };

  const addTodoHandler = () => {
    const copy = [...props.todoList];
    const newTodo = createTodo(props.todoTitle, props.todoContent);
    copy.push(newTodo);
    props.setTodoList(copy);
    props.setTodoTitle("");
    props.setTodoContent("");
  };

  return (
    <div className="container border bg-gray row flex-between">
      <div className="row" style={{ alignItems: "center" }}>
        <label htmlFor="todoTitle">제목</label>
        <input
          type="text"
          id="todoTitle"
          value={props.todoTitle}
          onChange={changeTitleHandler}
        />
        <label htmlFor="todoContent">내용</label>
        <input
          type="text"
          id="todoContent"
          value={props.todoContent}
          onChange={changeTodoContentHandler}
        />
      </div>
      <button className="btn btn-green" onClick={addTodoHandler}>
        추가하기
      </button>
    </div>
  );
}

export default InputGroup;
