import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import CardGroup from "./components/CardGroup";
import { useState } from "react";

function App() {
  const todoGroup = ["Working", "Done"];
  const [todoList, setTodoList] = useState([]);
  const handleDelete = (id) => {
    const copy = todoList.filter((n) => {
      return n.id !== id;
    });
    setTodoList(copy);
  };
  const handleToggle = (id) => {
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
        <InputGroup todoList={todoList} setTodoList={setTodoList}></InputGroup>
      </section>
      {todoGroup.map((n) => {
        return (
          <section key={`cardGroup-${n}`}>
            <CardGroup
              todoGroupTitle={n}
              todoList={todoList}
              onDelete={handleDelete}
              onToggle={handleToggle}
            ></CardGroup>
          </section>
        );
      })}
    </>
  );
}

export default App;
