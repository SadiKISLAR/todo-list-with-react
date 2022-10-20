import React from 'react'

const Todoform = ({handleSubmit, todo, setTodo, date, setDate}) => {
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <label htmlFor="">Task</label>
        <input className='input1' type="text" value={todo} placeholder="add task" onChange={(e) => setTodo(e.target.value)}/>
        <label htmlFor="">Date & Time</label>
        <input className='input2' type="date" value={date} placeholder="add time" onChange={(e) => setDate(e.target.value)}/>
        <button className='btn-go' type='submit'>Save Task</button>
    </form>
  )
}

export default Todoform