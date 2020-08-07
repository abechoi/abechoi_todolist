import { v4 } from "uuid";

export const todoReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [...state, {
        id: v4(),
        text: action.todo.text
      }]
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}