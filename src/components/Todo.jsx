import { useEffect, useRef, useState } from "react";
import "./css/Todo.css";
import TodoItems from "./TodoItems";

let count = 0;
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const add = () => {
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input
          type="text"
          ref={inputRef}
          placeholder="add your task"
          className="todo-input"
        />
        <div
          className="todo-add-btn"
          onClick={() => {
            add();
          }}
        >
          ADD
        </div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => {
          return (
            <TodoItems
              setTodos={setTodos}
              key={index}
              no={item.no}
              text={item.text}
              display={item.display}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
