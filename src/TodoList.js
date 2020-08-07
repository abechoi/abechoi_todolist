import React, { useContext } from "react";
import { TodoContext } from './TodoContext';
import TodoDetails from './TodoDetails';

const TodoList = () => {

  const { todos } = useContext(TodoContext);

  return todos.length ? (
      <ul style={{ padding: 0, margin: 0 }}>
        { todos.map( todo => (
          <TodoDetails todo={ todo } key={ todo.id }/>
        ))}
      </ul>
  ) : (
    <div style={{ marginTop: 75, fontSize: 30 }}>
      Todo List is empty!
    </div>
  );
}
export default TodoList;