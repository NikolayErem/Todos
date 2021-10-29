import React, { useEffect, useState } from 'react';
import { FormAddTodo } from '../../components/FormAddTodo/FormAddTodo';
import { TodoList } from '../../components/TodoList/TodoList';
import { TodoListButtons } from '../../components/TodoListButtons/TodoListButtons';

export interface Todo {
    text: string,
    isComplite: boolean,
    id: number
}

export function Main(): JSX.Element{
  const [todos, setTodos] = useState<Todo[]>([]);
  
  
  const getTodos = (): void => {
    let defaultArr: Todo[];
    const todosFromStorage = sessionStorage.hasOwnProperty('todos') ? sessionStorage.getItem('todos') : null;

    if (todosFromStorage) {
      defaultArr = JSON.parse(todosFromStorage)
    } else {
      defaultArr =[
        {
          text: 'Task 1',
          isComplite: true,
          id: (new Date().getTime() + 1)
        },
        {
          text: 'Task 2',
          isComplite: false,
          id: (new Date().getTime() + 2)
        },
        {
          text: 'Task 3',
          isComplite: true,
          id: (new Date().getTime() + 3)
        }
      ];
    }

    setTodos(defaultArr);
  }

  function createTodo(todo: Todo): void {
    setTodos([...todos, todo])
  }

  function deleteAllTodos(): void {
    setTodos([]);
  }

  function compliteAllTodos(): void {
    let newArr = [...todos]

    newArr.forEach((todo): void => {
      todo.isComplite = true;
    })

    setTodos(newArr);
  }

  function compliteTodo(todo: Todo): void {
    todos.forEach((elTodos): void => {
      if (elTodos.id === todo.id) {
        elTodos.isComplite = !elTodos.isComplite;
      }
    })

    setTodos([...todos]);
  }

  function deleteTodo(todo: Todo): void {

    const filteredTodos: Todo[] = todos.filter((elTodos): Boolean => {
      return elTodos.id !== todo.id
    });

    setTodos([...filteredTodos]);
  }

  useEffect((): void => {
    getTodos();
  }, [])

  useEffect((): void => {
    sessionStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
      <div>
        <h1>Todos</h1>
        <FormAddTodo createTodo = {createTodo}/>
        <TodoList todolist = {todos} compliteTodo = {compliteTodo} deleteTodo = {deleteTodo}/>
        <TodoListButtons deleteAllTodos = {deleteAllTodos} compliteAllTodos={compliteAllTodos}/>
      </div>
    );
}