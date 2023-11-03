import React from "react";
import Card from "./Card";

function CardGroup({ todoGroupTitle, todoList, onDelete, onToggle }) {
  return (
    <div className="container">
      <h2 className="mb-1">{todoGroupTitle}</h2>
      <ul className="card-group">
        {todoList.map((n, i) => {
          return n.state === todoGroupTitle ? (
            <li key={`card-${i}`}>
              <Card todoData={n} onDelete={onDelete} onToggle={onToggle}></Card>
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
}

export default CardGroup;
