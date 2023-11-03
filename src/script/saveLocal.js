const localStorage = window.localStorage;

const getLocalTodo = () => {
  const data = localStorage.getItem("todo");
  return JSON.parse(data);
};

const setLocalTodo = (arr) => {
  const data = JSON.stringify(arr);
  localStorage.setItem("todo", data);
};

export { getLocalTodo, setLocalTodo };
