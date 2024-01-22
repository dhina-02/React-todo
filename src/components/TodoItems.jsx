import "./css/TodoItem.css";
import tick from "./assets/tick-icon.png";
import not_tick from "./assets/not-tick.png";
import cross from "./assets/cross-icon.png";
const TodoItems = ({ no, text, display, setTodos }) => {

  const del = (no)=>{
  let data = JSON.parse(localStorage.getItem("todos"));
  data = data.filter((todo)=>todo.no!==no)
  setTodos(data)
  }

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));

    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };
  return (
    <div className="todoitems">
      <div
        className={`todoitems-container ${display}`}
        onClick={() => {
          toggle(no)
        }}
      >
        {display === "" ? (
          <img src={not_tick} alt="not-tick" />
        ) : (
          <img src={tick} alt="tick" />
        )}

        <div className="todoitems-text">{text}</div>
      </div>
      <img src={cross} alt="cross" className="todo-cross" onClick={()=>{del(no)}} />
    </div>
  );
};

export default TodoItems;
