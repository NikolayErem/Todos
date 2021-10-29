import { Todo } from "../../pages/Main/Main"
import { TodoItem } from "../TodoItem/TodoItem"


//todo naming of variables
interface TodoListProps {
    todolist: Todo[],
    compliteTodo(todo: Todo): void,
    deleteTodo(todo: Todo): void
}

export function TodoList({ todolist, compliteTodo, deleteTodo }: TodoListProps): JSX.Element {
    const renderTodos = () => {
        return todolist.map((todo: Todo) => {
            return (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    compliteTodo = {compliteTodo} 
                    deleteTodo = {deleteTodo} 
                />
            )
        })
    };

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
                {todolist.length ? renderTodos() : 'Todos are not defined'}
            </div>
        </div>
    )
}