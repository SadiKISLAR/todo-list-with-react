import { useState } from "react";

const TodoList = ({ todos, handleDelete, complateTodo }) => {
  {/* edited */
    /* buradaki sizin yazdığınız usestati kullanmıyoruz */ 
  }

  return (
    <ul className="allTodos">
      {todos.map((t, index) => (
        <li className="singleTodo">
          {/* edited */}
          <div
            key={index}
            className={t.isComplete ? "inlist-line" : "inlist" }
          >
            {/* edited */}
            <span className="todoText" onClick={() => complateTodo(t.id)} key={t.id}>
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