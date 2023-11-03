import React from "react";

function Card(props) {
  const deleteHandler = () => {
    props.deleteTodoData(props.cardData.id);
  };

  const toggleDoneHandler = (boolean) => {
    props.changeTodoDone(props.cardData.id, boolean);
  };

  return (
    <div className="card">
      <h2 className="card__title">{props.cardData.title}</h2>
      <p className="card__content">{props.cardData.content}</p>
      <div className="card__btn-group">
        <button className="btn btn-outline-red" onClick={deleteHandler}>
          삭제하기
        </button>

        {props.cardData.isDone ? (
          <button
            className="btn btn-outline-green"
            onClick={() => {
              toggleDoneHandler(false);
            }}
          >
            취소
          </button>
        ) : (
          <button
            className="btn btn-outline-green"
            onClick={() => {
              toggleDoneHandler(true);
            }}
          >
            완료
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
