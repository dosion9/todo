import React from "react";

function Card({ todoData, onDelete, onToggle }) {
  return (
    <div className="card">
      <h2 className="card__title">{todoData.title}</h2>
      <p className="card__content">{todoData.content}</p>
      <div className="card__btn-group">
        <button
          className="btn btn-outline-red"
          onClick={() => {
            onDelete(todoData.id);
          }}
        >
          삭제하기
        </button>

        {todoData.isDone ? (
          <button
            className="btn btn-outline-green"
            onClick={() => {
              onToggle(todoData.id, false);
            }}
          >
            취소
          </button>
        ) : (
          <button
            className="btn btn-outline-green"
            onClick={() => {
              onToggle(todoData.id, true);
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
