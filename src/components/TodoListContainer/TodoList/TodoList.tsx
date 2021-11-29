import { Todo } from '../../../pages/MainContainer/MainContainer';

interface TodoListProps {
    todos: Todo[],
    renderTodos(): JSX.Element[]
}

export function TodoList({ todos, renderTodos }: TodoListProps): JSX.Element {
    
    return(
        <div className='tasks'>
            <h4 className='subtitle'>
                Tasks
            </h4>
            <div className='tasks__todolist scroll_moz'>
                <div className="tasks__header">
                    <h5>Item</h5>
                    <h5>Status</h5>
                    <h5>Action</h5>
                </div>
                {todos.length ? renderTodos() : 'Todos are not defined'}
            </div>
        </div>
    );
}