import { FormAddTodoContainer } from '../FormAddTodoContainer/FormAddTodoContainer';
import { TodoListContainer } from '../TodoListContainer/TodoListContainer';
import { TodoListButtonsContainer } from '../TodoListButtonsContainer/TodoListButtonsContainer';
import { StatusInd } from '../StatusInd/StatusInd';

export function Main(): JSX.Element {

    return (
        <div>
            <h1>Todos</h1>
            <FormAddTodoContainer />
            <TodoListContainer />
            <TodoListButtonsContainer />
            <StatusInd />
        </div>
    );
}