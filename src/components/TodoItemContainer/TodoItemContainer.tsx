import { useDispatch } from 'react-redux';
import { Todo } from '../../pages/MainContainer/MainContainer';
import { TodosActionsRequest } from '../../store/actions/todos/subtypeRequest';
import { AppActions } from '../../store/actions/todos/subtypeStatus';
import { TodoItem } from './TodoItem/TodoItem';

interface TodoItemContainerProps {
    todo: Todo
}

export function TodoItemContainer({ todo }: TodoItemContainerProps): JSX.Element {
    const dispatch = useDispatch();

    function changeCheckTodo(todo: Todo) {
        dispatch({type: TodosActionsRequest.CHANGE_TODO_REQUESTED, todo})
    }

    function deleteTodo(todoId: string) {
        dispatch({type: TodosActionsRequest.DELETE_TODO_REQUESTED, todoId});
    }

    function selectTodo(todo: Todo): void {
        dispatch({type: AppActions.SELECT_TODO, payload: todo});
    }


    return (
        <>
            <TodoItem                     
                todo = {todo}
                changeCheckTodo = {changeCheckTodo}
                deleteTodo = {deleteTodo}
                selectTodo = {selectTodo}
            />
        </>
    );
}
