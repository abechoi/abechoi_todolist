import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoDetails = ({ todo }) => {

  const { dispatch } = useContext(TodoContext);

  return (
    <li onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}>
      <p className="todo-item">{ todo.text }</p>
    </li>
  );
}
export default TodoDetails;