import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import CardGroup from "./components/CardGroup";
import "./App.css";
import { useState } from "react";

function App() {
  const cardGroup = ["Working", "Done"];
  const [todoList, setTodoList] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  const deleteTodoData = (id) => {
    const copy = todoList.filter((n) => {
      return n.id !== id;
    });

    setTodoList(copy);
  };

  const changeTodoDone = (id) => {
    const copy = [...todoList];
    const index = copy.findIndex((n) => {
      return n.id === id;
    });
    copy[index].toggleDone();

    setTodoList(copy);
  };

  return (
    <>
      <Header></Header>
      <section>
        <InputGroup
          todoTitle={todoTitle}
          setTodoTitle={setTodoTitle}
          todoContent={todoContent}
          setTodoContent={setTodoContent}
          todoList={todoList}
          setTodoList={setTodoList}
        ></InputGroup>
      </section>
      {cardGroup.map((n) => {
        return (
          <CardGroup
            title={n}
            key={`cardGroup-${n}`}
            todoList={todoList}
            deleteTodoData={deleteTodoData}
            changeTodoDone={changeTodoDone}
          ></CardGroup>
        );
      })}
      <section></section>
    </>
  );
}

export default App;
