import { useState } from "react";

const TodoList = ({ todos, handleDelete }) => {
  const [line, setLine] = useState(true);
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          <div
            className={line ? "inlist" : "inlist-line"}
            onClick={() => setLine(!line)}
          >
            <span className="todoText" key={t.id}>
              {t.todo}
            </span>
            <span className="todoDate">{t.date}</span>
          </div>
          <button className="btn-delete" onClick={() => handleDelete(t.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;