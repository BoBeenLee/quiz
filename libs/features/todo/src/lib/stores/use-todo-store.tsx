import { uniqueId } from '@quiz/shared-utils';
import produce from 'immer';
import create from 'zustand';
import { Todo } from '../interfaces/todo';

interface TodoStoreProps {
  todos: Todo[];
  initialize: () => void;
  reset: () => void;
  addTodo: (name: string) => void;
}

const PREFIX_TODO_ID = 'todo';

export const useTodoStore = create<TodoStoreProps>((set, get) => ({
  todos: [
    {
      id: uniqueId('todo'),
      name: 'test',
      order: 1,
    },
  ],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  initialize: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  reset: () => {},
  addTodo: (name: string) => {
    const id = uniqueId('todo');
    set(
      produce<TodoStoreProps>((state) => {
        state.todos.push({
          name,
          id: uniqueId(PREFIX_TODO_ID),
          order: state.todos.length + 1,
        });
      })
    );
  },
}));

export const todosByOrderDESCSelector = (state: TodoStoreProps) =>
  state.todos.reverse();
export const todoTestSelector = (state: TodoStoreProps) => 'todoTest123';
