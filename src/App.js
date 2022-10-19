import { useState } from 'react';
import './App.css';
import Todoform from './components/Todoform';
import Todolist from './components/Todolist';


function App() {
  const [close, setClose] = useState(true);
  const[todo, setTodo] = useState("");
  const[todos, setTodos]= useState([]); 
  const[date, setDate] = useState("");
  const handleClose=(e)=> {
    e.preventDefault();
    setClose((prev)=> (prev = !prev));
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(todo !== "" && date !== "") {
      setTodos([{id: '${todo}- ${Date.now()}', todo, date }, ...todos]);
      setTodo("");
      setDate("");
    }
   }

  const handleDelete = (id)=> {
    const delTodo = todos.filter((to)=> to.id !== id);
    setTodos([...delTodo]);
  }
    return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        <button className="btn-close" onClick={handleClose}> {close? "close" : "show"}</button>
        { close && (<div>
        <Todoform handleSubmit={handleSubmit} todo={todo} date={date} setTodo={setTodo} setDate={setDate}/>
        <Todolist todos={todos} handleDelete={handleDelete}/> </div>)}
        
        </div>
    </div>
  );

};

export default App;
