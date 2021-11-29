import { useDispatch } from 'react-redux';
import { TodosActionsRequest } from '../../store/actions/todos/subtypeRequest';
import { TodoListButtons } from './TodoListButtons/TodoListButtons';

export function TodoListButtonsContainer(): JSX.Element {
    let dispatch = useDispatch();

    async function deleteAllTodos(): Promise<void> {
        dispatch({type: TodosActionsRequest.DELETE_ALL_TODOS_REQUESTED});
    }
    async function compliteAllTodos(): Promise<void> {
        dispatch({type: TodosActionsRequest.COMPLITE_ALL_TODOS_REQUESTED});
    }

    return (
        <>
            <TodoListButtons 
                deleteAllTodos = {deleteAllTodos} 
                compliteAllTodos = {compliteAllTodos}
            />
        </>
    );
}

