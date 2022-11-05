import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/Todolist";
function App() {
  const [close, setClose] = useState(true);
  const [show, setShow] = useState(true);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState("");
  const handleClose = (e) => {
    e.preventDefault();
    setClose((prev) => (prev = !prev));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "" && date !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo, date }, ...todos]);
      setTodo("");
      setDate("");
    }
  };
  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };


  const complateTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return

    })
    setTodo([updatedTodos])
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Task Tracker</h1>
        <button className="btn-close" onClick={handleClose}>
          {close ? "close" : "show"}
        </button>
        {close ? (
          <div>
            <TodoForm
              handleSubmit={handleSubmit}
              todo={todo}
              date={date}
              setTodo={setTodo}
              setDate={setDate}
            />

            <TodoList todos={todos} complateTodo={complateTodo} handleDelete={handleDelete} />
          </div>
        ) :

          (
            <div> No task to Show</div>
          )}
      </div>
    </div>
  );
}
export default App;