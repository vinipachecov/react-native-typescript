import {Interface} from 'readline';

export const TodoTypes = {
  ADD: 'add/TODO',
  REMOVE: 'remove/TODO',
};

export function addTodo(payload: string): TodoActions {
  return {
    type: TodoTypes.ADD,
    payload,
  };
}
interface addTodoAction {
  type: string;
  payload: string;
}

export function removeTodo(payload: string): TodoActions {
  return {
    type: TodoTypes.REMOVE,
    payload,
  };
}

interface removeTodoAction {
  type: string;
  payload: string;
}

const initialState: TodoState = {
  todoList: [],
};

export interface TodoState {
  todoList: string[];
}

type TodoActions = addTodoAction | removeTodoAction;

export default function(state = initialState, action: TodoActions): TodoState {
  switch (action.type) {
    case TodoTypes.ADD:
      return {...state, todoList: [...state.todoList, action.payload]};
    case TodoTypes.REMOVE:
      return {...state, todoList: [...state.todoList, action.payload]};
    default:
      return state;
  }
}
