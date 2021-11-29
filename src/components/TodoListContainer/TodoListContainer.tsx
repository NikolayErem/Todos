import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Todo} from '../../pages/MainContainer/MainContainer';
import { TodoItemContainer } from '../TodoItemContainer/TodoItemContainer';
import { TodoList } from './TodoList/TodoList';
import { TodosStateType } from '../../store/reducers/todosReducer';


export function TodoListContainer(): JSX.Element {
    const [todos, setTodos] = useState<Todo[]>([]);
    
    let selectorState = useSelector((state: TodosStateType): Todo[] => {
        return state.todos;
    });
    

    useEffect(() => {
        setTodos(selectorState);
    }, [selectorState]);

       
    const renderTodos = (): JSX.Element[] => {
        return todos.map((todo: Todo): JSX.Element => {
            return (
                <TodoItemContainer
                    key = {todo.id} 
                    todo = {todo} 
                />
            );
        });
    }; 


    return (
        <>
            <TodoList 
                todos = {todos}
                renderTodos = {renderTodos}
            />
        </>
    );
}
