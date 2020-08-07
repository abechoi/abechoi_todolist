import React from 'react';
import TodoContextProvider from './TodoContext';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
  return (
    <div className="TodoApp">
      <TodoContextProvider>
        <h1>TODO LIST</h1>
        <TodoForm />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default TodoApp;
