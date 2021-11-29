import { Link } from 'react-router-dom';
import { Todo } from '../../../pages/MainContainer/MainContainer';

interface TodoItemProps {
    todo: Todo,
    changeCheckTodo(todo: Todo): void,
    deleteTodo(todoId: string | null): void,
    selectTodo(todo: Todo): void
}

interface PageParamsProps{
    pathname: string
}

export function TodoItem({deleteTodo, changeCheckTodo, todo, selectTodo}: TodoItemProps): JSX.Element {

    return (
        <div className = 'item'>
            <Link to = '/task' onClick = {() => {selectTodo(todo);}} className = 'item__link'>
                <h3>
                    {todo.text}
                </h3>
            </Link>
            <p>
                {todo.isCheck ? 'Complited' : 'Not complited'}
            </p>
            <div className = 'item__buttons'>
                <button 
                    className = 'btn_blue'
                    onClick = {() => changeCheckTodo(todo)}
                >
                    Complite
                </button>
                <button 
                    className = 'btn_red'
                    onClick = {() => deleteTodo(todo.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
