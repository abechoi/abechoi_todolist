import React, { useContext, useState } from "react";
import { TodoContext } from './TodoContext';

const TodoForm = () => {

  const { todos, dispatch } = useContext(TodoContext);
  const [ text, setText ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(todos.length < 5){
      dispatch({ type: 'ADD_TODO', todo: { text } });
      setText('');
    }
  }

  return (
    <form style={{ marginTop: 25 }} onSubmit={handleSubmit}>

      <input className="text" type="text" placeholder="Enter todo item here..."
      onChange={(e) => setText(e.target.value)} value={text} required/>

      <input className="button" type="submit" value="+"/>

    </form>
  );
}
export default TodoForm;