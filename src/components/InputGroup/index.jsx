import React from "react";
import { useState } from "react";
import createTodo from "../../script/todo";

function InputGroup({ todoList, setTodoList }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleAdd = () => {
    const copy = [...todoList];
    const newTodo = createTodo(title, content);
    copy.push(newTodo);
    setTodoList(copy);
    setTitle("");
    setContent("");
  };
  return (
    <div className="container border bg-gray row flex-between ">
      <div className="row flex-center-Y">
        <label htmlFor="todo__title">제목</label>
        <input
          type="text"
          id="todo__title"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="todo__content">내용</label>
        <input
          type="text"
          id="todo__content"
          value={content}
          onChange={handleContentChange}
        />
      </div>
      <button className="btn btn-green" onClick={handleAdd}>
        추가하기
      </button>
    </div>
  );
}

export default InputGroup;
