import React, { useContext } from "react";
import { TodoContext } from './TodoContext';
import TodoDetails from './TodoDetails';

const TodoList = () => {

  const { todos } = useContext(TodoContext);

  return todos.length ? (
      <ul>
        { todos.map( todo => (
          <TodoDetails todo={ todo } key={ todo.id }/>
        ))}
      </ul>
  ) : (
    <div className="empty">Todo List is empty!</div>
  );
}
export default TodoList;