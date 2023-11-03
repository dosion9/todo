import React from "react";
import Card from "./Card";

function CardGroup(props) {
  return (
    <div className="container">
      <h2 className="mb-1">{props.title}</h2>
      <ul className="card-group">
        {props.todoList.map((n, i) => {
          return n.state === props.title ? (
            <li key={`card-${i}`}>
              <Card
                cardData={n}
                changeTodoDone={props.changeTodoDone}
                deleteTodoData={props.deleteTodoData}
              ></Card>
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
}

export default CardGroup;
