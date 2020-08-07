import React, { useContext, useState } from "react";
import { TodoContext } from './TodoContext';

const TodoForm = () => {

  const { dispatch } = useContext(TodoContext);
  const [ text, setText ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', todo: { text } });
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>

      <input className="text-input" type="text" placeholder="Enter todo item here..."
      onChange={(e) => setText(e.target.value)} value={text} required/>

      <input className="button" type="submit" value="ADD"/>

    </form>
  );
}
export default TodoForm;