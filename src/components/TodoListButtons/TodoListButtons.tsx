interface TodoListButtonsProps {
    deleteAllTodos(): void,
    compliteAllTodos(): void
}


export function TodoListButtons( { deleteAllTodos, compliteAllTodos }: TodoListButtonsProps): JSX.Element {
    return (
        <div className = 'panel'>
            <button 
                className = 'btn_blue'
                onClick = {compliteAllTodos}
            >
                Complite All
            </button>
            <button 
                className = 'btn_red'
                onClick = {deleteAllTodos}
            >
                Delete All
            </button>
        </div>
    )
}