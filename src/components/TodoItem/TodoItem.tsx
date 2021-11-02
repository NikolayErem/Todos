import { Link } from 'react-router-dom';
import { Todo } from '../../pages/Main/Main';

interface TodoItemProps {
    todo: Todo,
    compliteTodo(todo: Todo): void,
    deleteTodo(todo: Todo): void
}

interface PageParamsProps{
    pathname: string,
    pageTask: Todo
}

export function TodoItem({todo, compliteTodo, deleteTodo}: TodoItemProps): JSX.Element {

    const pageParams: PageParamsProps = {
        pathname: '/task/' + todo.id,
        pageTask: todo
    };

    return (
        <div className = 'item'>
            <Link to = {pageParams} className='item__link'>
                <h3>
                    {todo.text}
                </h3>
            </Link>
            <p>
                {todo.isComplite ? 'Complited' : 'Not complited'}
            </p>
            <div className = 'item__buttons'>
                <button 
                    className = 'btn_blue'
                    onClick = {() => compliteTodo(todo) }
                >
                    Complite
                </button>
                <button 
                    className = 'btn_red'
                    onClick = {() => deleteTodo(todo)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}