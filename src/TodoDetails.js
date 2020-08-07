import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoDetails = ({ todo }) => {

  const { dispatch } = useContext(TodoContext);

  return (
    <li style={{  marginTop: 10, marginBottom: 10, marginLeft: 'auto', marginRight: 'auto' }} 
    onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}>
      <p className="todo">{ todo.text }</p>
    </li>
  );
}
export default TodoDetails;